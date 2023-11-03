import { Form, redirect, useLoaderData } from "react-router-dom"
import { FormGroup } from "../components/FormGroup"
import { getUsers } from "../api/users"
import { createPost } from "../api/posts"

export function NewPost() {
  const users = useLoaderData()
  return (
    <div className="container">
      <h1 className="page-title">New Post</h1>
      <Form method="post" className="form">
        <div className="form-row">
          <FormGroup>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
            <div className="error-message">Required</div>
          </FormGroup>
          <FormGroup>
            <label htmlFor="userId">Author</label>
            <select name="userId" id="userId">
              {users.map((user) => {
                return (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                )
              })}
            </select>
          </FormGroup>
        </div>
        <div className="form-row">
          <FormGroup>
            <label htmlFor="body">Body</label>
            <textarea name="body" id="body"></textarea>
          </FormGroup>
        </div>
        <div className="form-row form-btn-row">
          <a className="btn btn-outline" href="/posts">
            Cancel
          </a>
          <button className="btn">Save</button>
        </div>
      </Form>
    </div>
  )
}

async function action({ request }) {
  const formData = await request.formData()
  const title = formData.get("title")
  const userId = formData.get("userId")
  const body = formData.get("body")

  const post = await createPost(
    { title, userId, body },
    { signal: request.signal }
  )

  return redirect(`/posts/${post.id}`)
}

function loader({ request: { signal } }) {
  return getUsers({ signal })
}

export const newPostRoute = {
  loader,
  action,
  element: <NewPost />,
}

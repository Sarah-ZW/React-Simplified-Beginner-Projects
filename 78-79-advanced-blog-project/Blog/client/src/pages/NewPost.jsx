import { Form, Link, redirect, useActionData, useLoaderData } from "react-router-dom"
import { FormGroup } from "../components/FormGroup"
import { getUsers } from "../api/users"
import { createPost } from "../api/posts"
import { PostForm, postFormValidator } from "../components/PostForm"

export function NewPost() {
  const users = useLoaderData()
  const errors = useActionData()

  return (
    <div className="container">
      <h1 className="page-title">New Post</h1>
      <PostForm users= {users} errors={errors} />
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

  const errors = postFormValidator({title, body, userId})

  if (Object.keys(errors).length > 0) {
    return errors
  }

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

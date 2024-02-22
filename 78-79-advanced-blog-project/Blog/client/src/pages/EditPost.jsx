import { Form, Link, redirect, useActionData, useLoaderData } from "react-router-dom"
import { FormGroup } from "../components/FormGroup"
import { getUsers } from "../api/users"
import { editPost, getPost } from "../api/posts"
import { PostForm, postFormValidator } from "../components/PostForm"

export function EditPost() {
   
  const {users, post } = useLoaderData()
  const errors = useActionData()

  return (
    <div className="container">
      <h1 className="page-title">Edit Post</h1>
     <PostForm users = {users} defaultValues = {post} errors={errors} />
    </div>
  )
}

async function action({ request, params: {postId} }) {
  const formData = await request.formData()
  const title = formData.get("title")
  const userId = formData.get("userId")
  const body = formData.get("body")

  const post = await editPost(
    postId,
    { title, userId, body },
    { signal: request.signal }
  )

  const errors = postFormValidator({title, body, userId})

  if (Object.keys(errors).length > 0) {
    return errors
  }

  return redirect(`/posts/${post.id}`)
}

async function loader({ request: { signal }, params: { postId } }) {
const users = getUsers({signal})
const post = getPost(postId, {signal})
  return {users: await users, post: await post}
}

export const editPostRoute = {
  loader,
  action,
  element: <EditPost />,
}

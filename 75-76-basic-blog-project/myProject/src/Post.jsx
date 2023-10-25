import { useEffect } from "react"
import { useLoaderData, useParams } from "react-router-dom"
import { useState } from "react"

export function Post() {
  const {postId}  = useParams()
  const [comments, setComments] = useState([])
  const [user, setUser] = useState('')
  const post = useLoaderData()

  useEffect(() => {
    const controller = new AbortController()
    fetch(`http://127.0.0.1:3000/posts/${postId}/comments`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json()
        }
        return Promise.reject(res)
      })
      .then(setComments)
      .catch((e) => {
        if (e.name === "AbortError") return
        console.error("Error fetching comments:", e)
      })

    return () => {
      controller.abort()
    }

  }, [postId])

  useEffect(() => {
    const controller = new AbortController()
    fetch(`http://127.0.0.1:3000/users/${post.userId}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json()
        }
        return Promise.reject(res)
      })
      .then(setUser)
      .catch((e) => {
        if (e.name === "AbortError") return
        console.error("Error fetching comments:", e)
      })

    return () => {
      controller.abort()
    }

  }, [post])

  return (
    <div className="container">
      <h1 className="page-title">{post.title}</h1>
      <span className="page-subtitle">
        By: <a href="user.html">{user.name}</a>
      </span>
      <div>{post.body}</div>

      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        {comments.length > 0 ? (
          comments.map((comment) => {
            return (
              <div className="card" key={comment.id}>
                <div className="card-body">
                  <div className="text-sm mb-1">{comment.body}</div>
                </div>
              </div>
            )
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

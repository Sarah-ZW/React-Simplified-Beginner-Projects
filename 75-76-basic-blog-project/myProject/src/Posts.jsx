import { Link, useLoaderData } from "react-router-dom"
import "../client/styles.css"

export function Posts() {
  const posts = useLoaderData()


  return (
    <>
      <div className="container">
        <h1 className="page-title">Posts</h1>
        <div className="card-grid">
        {posts.map((post) => {
          return (
            <div className="card" key={post.id}>
              <div className="card-header">{post.title}</div>
              <div className="card-body">
                <div className="card-preview-text">{post.body}</div>
              </div>
              <div className="card-footer">
              
                  <Link to={`${post.id.toString()}`}>View</Link>
            
              </div>
            </div>)
          })}
        </div>
      </div>
    </>
  )
}

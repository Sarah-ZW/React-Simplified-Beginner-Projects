import { Navigate, Outlet, createBrowserRouter } from "react-router-dom"
import { Posts } from "./Posts"
import { Users } from "./Users"
import { Todos } from "./Todos"
import { Navbar } from "./Navbar"
import { Post } from "./Post"

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      { path: "/*", element: <p>404 Error, This page does not exist</p> },
      { path: "/", element: <Navigate to="/posts" /> },
      {
        path: "/users",
        element: <Users />,
        loader: ({ request: { signal } }) => {
          return fetch("http://127.0.0.1:3000/users", { signal })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok")
              }
              return response
            })
            .catch((error) => {
              console.error("Error fetching data:", error)
            })
        },
      },
      { path: "/todos", element: <Todos /> },
      {
        path: "/posts",
        children: [
          {
            index: true,
            element: <Posts />,
            loader: ({ request: { signal } }) => {
              return fetch("http://127.0.0.1:3000/posts", { signal })
                .then((response) => {
                  if (!response.ok) {
                    throw new Error("Network response was not ok")
                  }
                  return response
                })
                .catch((error) => {
                  console.error("Error fetching data:", error)
                })
            },
          },
          { path: ":postId", element: <Post /> },
        ],
      },
    ],
  },
])

function NavLayout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* renders whatever child is matched */}
    </>
  )
}

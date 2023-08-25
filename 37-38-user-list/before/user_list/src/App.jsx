import { useEffect, useState } from "react"
import { User } from "./User"

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState()

  useEffect(() => {
    setLoading(true)
    const controller = new AbortController()
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal
    })
      .then((res) => res.json())
      .then(setUsers)
      .finally(() => setLoading(false))

      return () => {
        controller.abort()
      }
  }, [])

  let jsx
  if (loading == true) {
    jsx = "Loading..."
  } else {
    jsx = users.map((user) => {
      return <User key={user.id} name={user.name} />
    })
  }
  return (
    <>
      <h1>User List</h1>
      <ul>{jsx}</ul>
    </>
  )
}

export default App

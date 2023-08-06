import "./user.css"
import "./user.html"
import user from "./user.json"

function App() {
  return (
    <>
      <h1>{JSON.stringify(user)}</h1>
    </>
  )
}

export default App

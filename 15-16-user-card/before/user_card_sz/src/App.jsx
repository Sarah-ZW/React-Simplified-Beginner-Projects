import "./user.css"
import { UserCard } from "./UserCard"
import { UserCardClass } from "./UserCardClass"
import user from "./user.json"

function App() {
  console.log

  return (
    <>
      <UserCard
        name={user.name}
        age={user.age}
        phoneNumber={user.phoneNumber}
        address={user.address}
      />
      <br />
      <UserCardClass
        name={user.name}
        age={user.age}
        phoneNumber={user.phoneNumber}
        address={user.address}
      />
    </>
  )
}

export default App

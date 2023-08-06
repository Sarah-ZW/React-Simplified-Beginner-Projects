import "./user.css"
import { UserCard } from "./UserCard"
import user from "./user.json"
console.log(JSON.stringify(user))
function App() {
  console.log
  let userInfoString = JSON.stringify(user)
  let userInfoObj = JSON.parse(userInfoString)
  return (
    <UserCard
      name={userInfoObj.name}
      age={userInfoObj.age}
      phoneNumber={userInfoObj.phoneNumber}
      address={userInfoObj.address}
    />
  )
}

export default App

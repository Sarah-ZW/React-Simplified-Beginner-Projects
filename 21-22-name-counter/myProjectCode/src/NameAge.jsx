import { useState } from "react"

export function NameAge() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)

  function decreaseAge() {
    setAge((currentAge) => currentAge - 1)
  }
  function increaseAge() {
    setAge((currentAge) => currentAge + 1)
  }

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={decreaseAge}>-</button>
      <p>{age}</p>
      <button onClick={increaseAge}>+</button>
      <p>
        My name is {name} and I am {age} years old
      </p>
    </>
  )
}

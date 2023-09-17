import { useState } from "react"
import { checkEmail, checkPassword } from "./validators"

export function StateForm() {
  const [emailState, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false)
  const emailErrors = isAfterFirstSubmit ? checkEmail(emailState) : []
  const passwordErrors = isAfterFirstSubmit ? checkPassword(password) : []

  function handleSubmit(e) {
    e.preventDefault()

    setIsAfterFirstSubmit(true)

    const emailErrorArray = checkEmail(emailState)
    const passwordErrorArray = checkPassword(password)

   

    if (emailErrorArray.length === 0 && passwordErrorArray.length === 0) {
      alert("Success!")
    }
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className={`form-group ${emailErrors.length > 0 ? "error" : ""} `}>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={emailState}
            required
          />
          {emailErrors.length > 0 && (
            <div className="msg">{emailErrors.join(", ")}</div>
          )}
        </div>
        <div
          className={`form-group ${passwordErrors.length > 0 ? "error" : ""} `}
        >
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
          />
          {passwordErrors.length > 0 && (
            <div className="msg">{passwordErrors.join(", ")}</div>
          )}
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  )
}

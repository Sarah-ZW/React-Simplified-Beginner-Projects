import { useState, useRef } from "react"
import { checkEmail, checkPassword } from "./validators"

export function RefForm() {
  const emailRef = useRef()
  const passwordRef = useRef()

  const [emailErrors, setEmailError] = useState([])
  const [passwordErrors, setPasswordErrors] = useState([])
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()

    setIsAfterFirstSubmit(true)

    const emailErrorArray = checkEmail(emailRef.current.value)
    const passwordErrorArray = checkPassword(passwordRef.current.value)

    setEmailError(emailErrorArray)
    setPasswordErrors(passwordErrorArray)

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
            onChange={
              isAfterFirstSubmit &&
              ((e) => setEmailError(checkEmail(e.target.value)))
            }
            ref={emailRef}
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
            ref={passwordRef}
            onChange={
              isAfterFirstSubmit &&
              ((e) => setPasswordErrors(checkPassword(e.target.value)))
            }
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

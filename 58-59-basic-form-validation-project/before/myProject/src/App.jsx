import { useState } from "react"

function App() {
  const [emailState, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [emptyError, setEmptyError] = useState("")
  // const [password, setPassword] = useState()

  function handleSubmit(e) {
    e.preventDefault()

    const emailRegex = /@webdevsimplified.com$/
    const emailEnding = emailRegex.test(emailState)

    if (!emailEnding) {
      setEmailError("Please end your email address in @webdevsimplified.com")
    } else {
      setEmailError("")
    }

    if (emailState === null) {
      setEmptyError("Please enter something for an email address")
    }
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group error">
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
          <div className="msg">{emailError}</div>
          <div className="msg">{emptyError}</div>
        </div>
        <div className="form-group">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            value="Password123!"
            type="password"
            id="password"
          />
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  )
}

export default App

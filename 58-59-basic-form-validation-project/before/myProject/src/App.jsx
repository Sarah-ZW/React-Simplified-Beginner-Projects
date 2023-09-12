import { useState } from "react"

function App() {
  const [errorText, setErrorText] = useState()
  const [email, setEmail] = useState()
  // const [password, setPassword] = useState()

  function handleSubmit(e) {
    e.preventDefault()

    const emailRegex = /@webdevsimplified.com$/
    const emailEnding = emailRegex.test(email)

    if (!emailEnding) {
      setErrorText("Please end your email address in @webdevsimplified.com")
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
            value={email}
            required
          />
          <div className="msg" value={errorText}></div>
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

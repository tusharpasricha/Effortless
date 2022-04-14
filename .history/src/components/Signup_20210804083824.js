import React, { useRef, useState } from "react"
// import { Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
    <article className="bgmain">
    <section>
        <h1>EFFORT LESS</h1>
        <h3> a Simple Ledger</h3>
        <h2>for not so Simple People</h2>
        
        </section>
      <div className="signupbox">
          <h1 className="heading">Sign Up</h1>
          {error&& alert("Can't SignUp")}

          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          <form onSubmit={handleSubmit}>
            <section className="inputbox">
              <label>Email</label>
              <input id="email" type="email" ref={emailRef} required />
              <label>Password</label>
              <input id="password" type="password" ref={passwordRef} required />
              <label>Password Confirmation</label>
              <input id="password-confirm" type="password" ref={passwordConfirmRef} required />
              </section>
            <button disabled={loading} className="but1" type="submit">
              Sign Up
            </button>
          </form>
      <div >
        Already have an account? <Link to="/login">Log In</Link>
      </div>
      </div>
</article>
    </>
  )
}
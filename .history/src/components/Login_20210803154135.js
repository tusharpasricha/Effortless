import React, { useRef, useState } from "react"
// import {Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
    <article className="bgmain">
      <div className="loginbox">
          <h1 className="heading">LOG IN</h1>
          {error&& alert({error})}
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          <form onSubmit={handleSubmit}>
            <section className="inputbox"> 
              <label>Email</label>
              <input id="email" type="email" ref={emailRef} required ></input>
              <label>Password</label>
              <input id="password" type="password" ref={passwordRef} required ></input>
              </section>
            <button disabled={loading} className="but1" type="submit">
              Log In
            </button>
          </form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
      </div>
      </article>

    </>
  )
}
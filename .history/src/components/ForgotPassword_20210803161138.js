import React, { useRef, useState } from "react"
// import { Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
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
      <div className="forgotbox">
          <h1 className="heading">Password Reset</h1>
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          {/* {message && <Alert variant="success">{message}</Alert>} */}
          <form onSubmit={handleSubmit}>
            <section className="inputbox">
              <label>Email</label>
              <input id="email" type="email" ref={emailRef} required />
              </section>
            <button disabled={loading} className="but1" type="submit">
              Reset Password
            </button>
          </form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
      </div>
      </article>

    </>
  )
}
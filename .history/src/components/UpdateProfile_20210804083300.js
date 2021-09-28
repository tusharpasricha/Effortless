import React, { useRef, useState } from "react"
import { Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
    <article className="bgmain">
    <div className="updatebox">

          <h1 className="heading" >Update Profile</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <form onSubmit={handleSubmit}>
          <section className="inputbox"> 
            <label >Email</label>
                <input id="email" type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email} ></input>
            <label >Password</label>
                <input id="password" type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same" ></input>
            <label id="password-confirm"  type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same">Password Confirmation</label>
              </section>
            <Button disabled={loading} className="but1" type="submit">
              Update
            </Button>
          </form>
      <div className="w-100 text-center mt-2">
        <Link to="/">Cancel</Link>
      
      </div>
    </div>
      </article>

    </>
  )
}
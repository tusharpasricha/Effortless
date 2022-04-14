import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
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

      <Card>
        <Card.Body>
          <h1 className="heading" >Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <form onSubmit={handleSubmit}>
            <Form.Group >
              <label id="email">Email</label>
              <Form.Control
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group >
              <label id="password" type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same">Password</label>
    
            </Form.Group>
            <Form.Group >
              <label id="password-confirm"  type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same">Password Confirmation</label>
             
            </Form.Group>
            <Button disabled={loading} className="but1" type="submit">
              Update
            </Button>
          </form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/">Cancel</Link>
      </div>
      </article>
    </>
  )
}
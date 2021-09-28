import React from 'react'

function Head() {
    const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }
    return (
        <div>
        <section className="head">
            <span className="description">
        <h1>EFFORT LESS</h1>
        <h3> a Simple Ledger</h3>
        <h2>for not so Simple People</h2>
        </span>
        </section>
        </div>
    )
}

export default Head

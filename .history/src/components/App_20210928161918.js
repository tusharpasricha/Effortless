import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Page1 from "./page1"
import Page2 from "./page2"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"

function App() {
  return (
    <Container>
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Page1} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              {/* <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} /> */}
              <Route path="/add" component = {Page2}/>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
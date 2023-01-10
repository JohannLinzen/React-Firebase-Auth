import React from "react"
import Signup from "./components/members/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./components/members/contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./components/members/Dashboard"
import Login from "./components/members/Login"
import PrivateRoute from "./components/members/PrivateRoute"
import ForgotPassword from "./components/members/ForgotPassword"
import UpdateProfile from "./components/members/UpdateProfile"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App

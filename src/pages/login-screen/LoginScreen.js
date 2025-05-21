import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm'

class LoginScreen extends Component {
  render() {
    return (
      <div>
        <header>
          <LoginForm/>
        </header>        
      </div>
    )
  }
}
export default LoginScreen
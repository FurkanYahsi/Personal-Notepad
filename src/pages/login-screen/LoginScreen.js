import React, { Component } from 'react'
import './LoginScreen.css'
import LoginForm from '../../components/login-form/LoginForm'

class LoginScreen extends Component {
  render() {
    return (
      <div className='loginScreen'>
        <header>
          <LoginForm/>
        </header>
      </div>
    )
  }
}
export default LoginScreen
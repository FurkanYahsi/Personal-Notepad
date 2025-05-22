import React, { Component } from 'react'
import LoginForm from '../../components/login-form/LoginForm'
import './LoginScreen.css'

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
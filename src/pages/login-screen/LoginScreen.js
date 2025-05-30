import { Component } from 'react'
import './LoginScreen.css'
import LoginForm from '../../components/login-form/LoginForm'

class LoginScreen extends Component {
  render() {
    return (
      <div className='loginScreen'>
        <LoginForm/>
      </div>
    )
  }
}
export default LoginScreen
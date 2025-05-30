import { Component } from 'react'
import './SignUpScreen.css'
import SignUpForm from '../../components/sign-up-form/SignUpForm'

class SignUpScreen extends Component {
  render() {
    return (
      <div className='signUpScreen'>
        <SignUpForm/> 
      </div>
    )
  }
}
export default SignUpScreen
import React, { Component } from 'react'
import './SignUpScreen.css'
import SignUpForm from '../../components/sign-up-form/SignUpForm'

class SignUpScreen extends Component {
  render() {
    return (
      <div className='signUpScreen'>
        <header>
          <SignUpForm/>
        </header>  
      </div>
    )
  }
}
export default SignUpScreen
import { Button, Form, Input } from "antd";
import './SignUpForm.css'
import {Link} from "react-router-dom";
import { useSignUpForm } from "./SignUpForm.logic";

const SignUpForm = () => {
  const {contextHolder,form,handleSubmit} = useSignUpForm()

  return (
    <div className='signUpForm'>
      {contextHolder}
      <div className='card'>
        <div className="card-header welcomeText" >Welcome!</div>
        <div className="card-body">
          <Form
            form={form}
            name="basic"
            key="signupForm"
            labelCol={{ span: '24' }}
            wrapperCol={{ span: '24px' }}
            onFinish = {handleSubmit}>

              {/* Name Input */}
              <Form.Item
                label='Name::'
                name='Name'
                hasFeedback
                rules={[{ required: true, message: 'Please enter your name!'}]}
              >
                <Input type="text" name="signupNameInput" key="signupNameInput"/>
              </Form.Item>

               {/* Surname Input */}
              <Form.Item
                label='Surname::'
                name='Surname'
                hasFeedback
                rules={[{ required: true, message: 'Please enter your surname!'}]}
              >
                <Input type="text" name="signupSurnameInput" key="signupSurnameInput"/>
              </Form.Item>

              {/* Email Input */}
              <Form.Item
                label="E-mail::"
                name="Email"
                hasFeedback
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not a valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please enter your E-mail!',
                  },
                ]}
              >
                <Input name="signupEmailInput" key="signupEmailInput"/>
              </Form.Item>

              {/* Password Input */}
              <Form.Item
                label='Password::'
                name='Password'
                hasFeedback
                rules={[{ required: true, message: 'Please enter your password!'}]}
              >
                    {/* Kontrol gerekli */}
                    <Input.Password autoComplete="off" type="text" name="signupPasswordInput" key="signupPasswordInput"/>
              </Form.Item>

              {/* Again Password Input */}
             <Form.Item
                name="PasswordConfirmation"
                label="Confirm Password::"
                dependencies={['Password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('Password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The passwords do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password name="signupConfirmPasswordInput" key="signupConfirmPasswordInput"/>
              </Form.Item>

              {/* Submit Button */}
              <Form.Item label={null}>
                <Button type="primary" onClick={handleSubmit} name="signupSubmitButton" key="signupSubmitButton">Submit</Button>
              </Form.Item>

          </Form>
        </div>
        <h6>
          {/* CSS'e yazsam color çakışmadan dolayı default mavi oluyor. */}
          <Link name="haveAccount" key="haveAccount" to={'/login'} style={{color:"#C1C6CC"}}>Have an account?</Link>
        </h6>        
      </div>   
    </div>
  )
}

export default SignUpForm

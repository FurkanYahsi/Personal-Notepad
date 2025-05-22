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
        <div className="card-header" style={{color:'white'}}>Welcome!</div>
        <div className="card-body">
          <Form
            form={form}
            name="basic"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            style={{ maxWidth: 600 }}
            onFinish = {handleSubmit}>
              
              {/* Name Input */}
              <Form.Item
                label='Name::'
                name='Name'
                rules={[{ required: true, message: 'Please enter your name!'}]}
              >
                <Input type="text"/>
              </Form.Item>

               {/* Surname Input */}
              <Form.Item
                label='Surname::'
                name='Surname'
                rules={[{ required: true, message: 'Please enter your surname!'}]}
              >
                <Input type="text"/>
              </Form.Item>

              {/* Email Input */}
              <Form.Item
                label='Email::'
                name='Email'
                rules={[{ required: true, message: 'Please enter your email!'}]}
              >
                <Input type="text"/>
              </Form.Item>

              {/* Password Input */}
              <Form.Item
                label='Password::'
                name='Password'
                rules={[{ required: true, message: 'Please enter your password!'}]}
              >
                    {/* Kontrol gerekli */}
                    <Input.Password autoComplete="off" type="text"/>
              </Form.Item>

              {/* Again Password Input */}
              <Form.Item
                label='Password Again::'
                name='Password Again'
                rules={[{ required: true, message: 'Please enter your password again!'}]}
              >
                    <Input.Password autoComplete="off" type="text"/>
              </Form.Item>

              {/* Submit Button */}
              <Form.Item label={null}>
                <Button type="primary" onClick={handleSubmit}>Submit</Button>
              </Form.Item>

          </Form>
        </div>
        <h6>
          <Link to={'/login'} style={{color:"#C1C6CC"}}>Do you have an account?</Link>
        </h6>        
      </div>   
    </div>
  )
}

export default SignUpForm

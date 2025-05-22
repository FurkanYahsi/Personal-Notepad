import { Button, Form, Input, notification } from "antd";
import './LoginForm.css'

import {Link} from "react-router-dom";
import { useState } from "react";
// import { useForm } from "antd/es/form/Form";

//@Todo: form düzeltilecek

const LoginForm = () => {
  // const form = useForm();
  const [email, emailUpdate] = useState('');
  const [password, passwordUpdate] = useState('');

  const proceedLogin = (e) => {
    if (isValid()) {
      console.log('validation');
    }
  }
  const isValid = () => {
    let result = true;
    console.log({email});
    if (email==='' || email===null) {
      result = false;
      console.log('bos');
            
      notification.warning({
        message: "Enter your email!",
        description: "Email is blank",
        placement: "bottomLeft",
        duration: 4,
      });
    }
    if (password==='' || password===null) {
      result = false;
      notification.warning({
        message: "Enter your password!",
        description: "Password is blank",
        placement: "bottomLeft",
        duration: 4,
      });
    }
     return result;
  }

  return (   
    <div className='loginForm'>
      <div className='card'>
        <div className="card-header" style={{color:'white'}}>Welcome Back!</div>
        <div className="card-body">
          <Form
            // form={form}
            name="basic"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            style={{ maxWidth: 600 }}
            onFinish = {proceedLogin}>
            
              <Form.Item
                label='Email::'
                name='email'
                rules={[{ required: true, message: 'Please enter your password!'}]}
              >
                <Input type="text" value={email} onChange={e=>emailUpdate(e.target.value)}/>
              </Form.Item>

              <Form.Item
                label='Password::'
                name='password'
                rules={[{ required: true, message: 'Please enter your password!'}]}
              >
                    {/* Kontrol gerekli */}
                    <Input.Password autoComplete="off" type="text" value={password} onChange={e=>passwordUpdate(e.target.value)}/>
              </Form.Item>

              <Form.Item label={null}>
                <Button type="primary" htmlType="submit">Submit</Button>
              </Form.Item>

          </Form>
        </div>
        <h6>
          <Link to={'/sign-up'}>Don't you have an account?</Link>
        </h6>        
      </div>   
    </div>
  )
}

export default LoginForm

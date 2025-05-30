import { Button, Form, Input } from "antd";
import {Link} from "react-router-dom";
import './LoginForm.css';
import { useLoginForm } from "./LoginForm.logic";

const LoginForm = () => {
  const {contextHolder,form,handleSubmit} = useLoginForm();
 
  return (   
    <div className='loginForm'>
      {contextHolder}
      <div>
        <p className="welcomeBackText">Welcome Back!</p>
        <div>
          <Form
            form={form}
            name="basic"
            labelCol={{ span: '24' }}
            wrapperCol={{ span: '24px' }}
            onFinish = {handleSubmit}>
            
            <Form.Item
              label='Email::'
              name='Email'
              rules={[{ required: true, message: 'Please enter your email!'}]}
            >
              <Input type="text"/>
            </Form.Item>
            <Form.Item
              label='Password::'
              name='Password'
              rules={[{ required: true, message: 'Please enter your password!'}]}
            >
              <Input.Password autoComplete="off" type="text"/>
            </Form.Item>
            <Form.Item label={null}>
              <Button type="primary" onClick={handleSubmit}>Submit</Button>
            </Form.Item>

          </Form>
        </div>
        <h6>
          {/* CSS'e yazsam color çakışmadan dolayı default mavi oluyor. */}
          <Link to={'/sign-up'} style={{color:"#C1C6CC"}}>Don't have an account?</Link>
        </h6>        
      </div>   
    </div>
  )
}

export default LoginForm

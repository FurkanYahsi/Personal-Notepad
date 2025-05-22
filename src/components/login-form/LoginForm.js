import { Button, Form, Input } from "antd";
import './LoginForm.css'
import {Link} from "react-router-dom";
import { useLoginForm } from "./LoginForm.logic";

const LoginForm = () => {
  const {contextHolder,form,handleSubmit,proceedLogin} = useLoginForm()
 
  return (   
    <div className='loginForm'>
      {contextHolder}
      <div className='card'>
        <div className="card-header" style={{color:'white'}}>Welcome Back!</div>
        <div className="card-body">
          <Form
            form={form}
            name="basic"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            style={{ maxWidth: 600 }}
            onFinish = {proceedLogin}>
            
              <Form.Item
                label='Email::'
                name='email'
                rules={[{ required: true, message: 'Please enter your email!'}]}
              >
                <Input type="text"/>
              </Form.Item>

              <Form.Item
                label='Password::'
                name='password'
                rules={[{ required: true, message: 'Please enter your password!'}]}
              >
                    {/* Kontrol gerekli */}
                    <Input.Password autoComplete="off" type="text"/>
              </Form.Item>

              <Form.Item label={null}>
                <Button type="primary" onClick={handleSubmit}>Submit</Button>
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

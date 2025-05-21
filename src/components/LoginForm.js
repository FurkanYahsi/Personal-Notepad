import { Button, Form, Input } from "antd";

const LoginForm = () => {
  return (
    <div>
      <div className='card' style={{backgroundColor:'#999999'}}>
        <div className="card-header">Welcome Back!</div>
        <div className="card-body">
          <Form   name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off">
            
              <Form.Item
                label='Email:'
                name='email'
                rules={[{required:true, message:'Please enter your email address!'}]}>
                <Input/>
              </Form.Item>

              <Form.Item
                label='Password:'
                name='password'
                rules={[{required:true, message:'Please enter your password!'}]}>
                    <Input.Password/>
              </Form.Item>

              <Form.Item label={null}>
                <Button type="primary" htmlType="submit">Submit</Button>
              </Form.Item>

          </Form>
        </div>
        <h6 style={{cursor:'pointer'}}>Don't you have an account?</h6>
      </div>
       
      
    </div>
  )
}

export default LoginForm

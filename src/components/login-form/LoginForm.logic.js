import { Button, Form, Input, notification } from "antd";


export const useLoginForm = () => {
    const [form] = Form.useForm();
    const [api,contextHolder] = notification.useNotification();
    

   const handleSubmit = () => {
    form.validateFields().then((values)=> {
      const {email, password} = values;
      console.log(email);
      if(email===1) {
        
      }
    }).catch(()=> {
       api.open ({
        message:"",
        description:"Fields cannot be blank!",
        placement:"bottomLeft",
        duration:3,
        style:{background:'#999999'}
    })
    })
   }
  
  const proceedLogin = (e) => {    
    e.preventDefault();
    if (isValid()) {
      console.log('validation');
    }
  }
  
  const isValid = () => {
    
    const email = form.getFieldValue("email");
    const password = form.getFieldValue("password");
    let result = true;
    console.log({email});
    if (!email) {
      result = false;
      console.log('bos');     
    }
    if (!password) {
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

  return {
    contextHolder,
    form,
    handleSubmit,
    proceedLogin
  }
}
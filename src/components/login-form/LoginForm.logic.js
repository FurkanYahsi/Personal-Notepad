import { Form, notification } from "antd";

export const useLoginForm = () => {
    const [form] = Form.useForm();
    const [api,contextHolder] = notification.useNotification();

    const handleSubmit = () => {
      form.validateFields().then((values)=> {
        // const {email, password} = values;
        // console.log(email);
        // if(email===1) {
          
        // }
        
      }).catch((error)=> {      
        error.errorFields.map((item) => {        
          api.open ({
            message:"",
            description:  item.name[0] + " cannot be blank!",
            placement:"bottomLeft",
            duration:3,
            style:{background:'#999999'}
          })
        })      
      })
    }


  return {
    contextHolder,
    form,
    handleSubmit,
  }
}
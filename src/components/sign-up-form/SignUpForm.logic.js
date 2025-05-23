import { Form, notification } from "antd";
import { useNavigate } from "react-router-dom";

export const useSignUpForm = () => {
    const [form] = Form.useForm();
    const [api,contextHolder] = notification.useNotification();
    const navigate = useNavigate();    

    const handleSubmit = () => {
      form.validateFields().then((values)=> {
        // areFieldsEmpty(values);
        arePasswordsSame(values);
      }).then(()=>{
        navigate("/home");
      })
      
      .catch((error)=> {
        if (error.message !== "Error-PasswordsSame") {
          api.open ({
          message:"",
          //The empty fields are indicated to user in one toast message.
          description: error.errorFields?.map((item) => {
            return(<div>{item.name[0]} can not be empty! </div>);
          }),
          placement:"bottomLeft",
          duration:3,
          style:{background:'#999999'}
        })
        }
      })
    }
   
    //If passwords are not same, it is indicated to user in a toast message.
    const arePasswordsSame = (values) => {            
      if (values.Password !== values.PasswordAgain) {
        api.open ({
          message:"",
          description: "The passwords are not same!",
          placement:"bottomLeft",
          duration:3,
          style:{background:'#999999'}
        })
        throw new Error("Error-PasswordsSame");
      }
    }
   
  return {
    contextHolder,
    form,
    handleSubmit,
  }
}


 // const areFieldsEmpty = (values) => {
    //   const arr = [];
    //   if (values.Name === '' || values.Name === null) {
    //     arr[arr.length] = 'Name'
    //   }
    //   if (values.Surname === '' || values.Surname === null) {
    //     arr[arr.length] = 'Surname'
    //   }
    //   if (values.Email === '' || values.Email === null) {
    //     arr[arr.length] = 'Email'
    //   }
    //   if (values.Password === '' || values.Password === null) {
    //     arr[arr.length] = 'Password'
    //   }
    //   if (values.PasswordAgain === '' || values.PasswordAgain === null) {
    //     arr[arr.length] = 'Password Again'
    //   }

    //   // api.open ({
    //   //   message:"",
    //   //   description: arr.map((item) => {
    //   //     return(<div>{item} can not be empty! </div>);
    //   //   }),
    //   //   placement:"bottomLeft",
    //   //   duration:3,
    //   //   style:{background:'#999999'}
    //   // })
    // }

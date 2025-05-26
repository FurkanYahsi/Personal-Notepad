import { Form, notification } from "antd";
import { useNavigate } from "react-router-dom";

export const useSignUpForm = () => {
    const [form] = Form.useForm();
    const [api,contextHolder] = notification.useNotification();
    const navigate = useNavigate();

    const handleSubmit = async () => {

      const values = await form.validateFields();

      form.validateFields().then((values)=> {
      })
      .catch((error)=> {
        console.log('catch bloğu:' + error.message)
        // if ((error.message !== "Error-PasswordsAreNotSame") && (error.message !== "Error-EmailIsNotValid")) {
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
        // }
      })

      try{
        // areFieldsEmpty(values);
        if (!arePasswordsSame(values))
          throw new Error("Error-PasswordsAreNotSame");

        const isEmailOK = await fetchUserEmails(values);

        if (!isEmailOK) {
          throw new Error("Error-EmailIsNotValid");
        }
        navigate("/home");
           
      }catch(error){
       
      }
    }
   
    //If passwords are not same, it is indicated to user in a toast message.
     const arePasswordsSame=(values) =>{

      if (values.Password !== values.PasswordAgain) {
        api.open ({
          message:"",
          description: "The passwords are not same!",
          placement:"bottomLeft",
          duration:3,
          style:{background:'#999999'}
        })
        return false;
      }
      return true;
    }

    const fetchUserEmails = async (values) => {
      const response = await fetch('fake-db.json');
       if(!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

      const data = await response.json();
      const isEmailValidValue = await isEmailValid(values, data);

      if(!isEmailValidValue) {
        return false;
      } 
      return true;
    }
    
    //If there is one match, then this e-mail is not valid
    const isEmailValid = async (values, data) => {
      const isEmailExist = await data.users.some(user => user.email === values.Email);
      if (isEmailExist) {
        api.open ({
        message:"",
        description: "This email is already used!",
        placement:"bottomLeft",
        duration:3,
        style:{background:'#999999'}
        }) 
        return false;
      }
    return !isEmailExist;
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

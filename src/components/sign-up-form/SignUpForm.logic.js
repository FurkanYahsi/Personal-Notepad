import { Form, notification } from "antd";
import { useNavigate } from "react-router-dom";

 // TODO: Toast messages will be reviewed 

export const useSignUpForm = () => {
    const [form] = Form.useForm();
    const [api,contextHolder] = notification.useNotification();
    const navigate = useNavigate();

   const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      if (!arePasswordsSame(values)) {
        throw new Error("Error-PasswordsAreNotSame");
      }

      const isEmailOK = await fetchUserEmails(values);
      if (!isEmailOK) {
        throw new Error("Error-EmailIsNotValid");
      }
      localStorage.setItem('currentUser', 'guest');
      navigate("/home");

    } catch (error) {
      if (error.errorFields) {
        api.open({
          message: "",
          description: error.errorFields.map((item) => (
            <div key={item.name[0]}>{item.name[0]} can not be empty!</div>
          )),
          placement: "bottomLeft",
          duration: 3,
          style: { background: "#999999" },
        });
      }
    }
  };

    //If passwords are not same, it is indicated to user in a toast message.
     const arePasswordsSame=(values) =>{

      if (values.Password !== values.PasswordConfirmation) {
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

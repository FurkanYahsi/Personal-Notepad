import { Form } from "antd";
import { useNavigate } from "react-router-dom";
import { ToastMessage } from "../../utils/ToastMessage";

export const useSignUpForm = () => {
    const [form] = Form.useForm();
    const {contextHolder, showNotification} = ToastMessage();
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
        showNotification(error.errorFields.map((item) => (
            <div key={item.name[0]}>{item.errors[0]}</div>
          )))
      }
    }
  };

    //If passwords are not same, it is indicated to user in a toast message.
     const arePasswordsSame=(values) =>{

      if (values.Password !== values.PasswordConfirmation) {
        showNotification("The passwords are not same!");
        return false;
      }
      return true;
    }

    const fetchUserEmails = async (values) => {
      const response = await fetch('fake-db.json');
       if(!response.ok) {
          throw new Error('JSON file could not found!');
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
        showNotification("This email is already used!");        
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

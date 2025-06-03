import { Form } from "antd";
import { useNavigate } from "react-router-dom";
import { ToastMessage } from "../../utils/ToastMessage";

export const useLoginForm = () => {
  const [form] = Form.useForm();
  const {contextHolder, showNotification} = ToastMessage();
  const navigate = useNavigate();
  //If input fields are not blank, call the fetchUserData()
  const handleSubmit = () => {
    form.validateFields().then((values)=> {
      fetchUserData(values);
    }).catch((error)=> {      
      error.errorFields.foreach((item) => {
        showNotification(item.name[0] + " cannot be blank!")
      })
    })
  }
  //Search every object in JSON file and the user can go to Home Page if there is one match.
  const fetchUserData = (values) => {
    fetch('fake-db.json').then(response => {
      if(!response.ok) {
        throw new Error('The JSON file could not found!')
      }
      return response.json();
    }).then(data=> {
      if (isUserValid(data, values)) {
        navigate('/home');
      }
    })
    .catch((error)=> console.error('Failed to fetch data:', error))
  }
  const isUserValid = (data, values) => {
    let isValid = false;
    data.users.some((user) => {
      if ((user.email === values.Email) && (user.password === values.Password)) {
        isValid = true;
        //Which user is loggedin to system
        localStorage.setItem('currentUser', user.id);
        return true;
      }
      return false;
    })
    if (!isValid) {
      showNotification("Email or password is wrong!");
      
    }
    return isValid;
  }
  return {
    contextHolder,
    form,
    handleSubmit,
  }
}
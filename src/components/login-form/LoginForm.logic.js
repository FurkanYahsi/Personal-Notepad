import { Form, notification } from "antd";
import { useNavigate } from "react-router-dom";

export const useLoginForm = () => {
  const [form] = Form.useForm();
  const [api,contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  //If input fields are not blank, call the fetchUserData()
  const handleSubmit = () => {
    form.validateFields().then((values)=> {
      fetchUserData(values);
    }).catch((error)=> {      
      error.errorFields.map((item) => {
        api.open ({
          className:'toastMessageBackground',
          message:"",
          description:  item.name[0] + " cannot be blank!",
          placement:"bottomLeft",
          duration:3,
        })
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
        localStorage.setItem('currentUser', values.Email)
      }
    })
    if (!isValid) {
      api.open ({
        className:'toastMessageBackground',
        message:"",
        description: "Email or password is wrong!",
        placement:"bottomLeft",
      })
    }
    return isValid;
  }
  return {
    contextHolder,
    form,
    handleSubmit,
  }
}
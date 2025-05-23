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
            message:"",
            description:  item.name[0] + " cannot be blank!",
            placement:"bottomLeft",
            duration:3,
            style:{background:'#999999'}
          })
        })      
      })
    }

      //Search every object in JSON file and the user can go to Home Page if there is one match.
      const fetchUserData = (values) => {
        fetch('fake-db.json').then(response => {
          if(!response.ok) {          
            throw new Error(`HTTP error! Status: ${response.status}`)
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
        let flag = false;        
        data.users.map((user) => {
          if ((user.email === values.Email) && (user.password === values.Password)) flag = true;          
        })
        if (!flag) {
          api.open ({
              message:"",
              description: "Email or password is wrong!",
              placement:"bottomLeft",
              style:{background:"#999999"}
        })
        }
        return flag;
      }

  return {
    contextHolder,
    form,
    handleSubmit,
  }
}
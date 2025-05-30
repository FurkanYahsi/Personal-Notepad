import { notification } from "antd";
export const ToastMessage = (description) => {
    
    return(notification.open({
    className:'toastMessageBackground',
    message:"",
    description: description,
    placement:"bottomLeft",
    duration:3,
    }))
    

 
}


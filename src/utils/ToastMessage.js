import { notification } from "antd";

export const ToastMessage = ({description}) => {

    const [api, contextHolder] = notification.useNotification();
    
   api.open({
    className:'toastMessageBackground',
    message:"",
    description: description,
    placement:"bottomLeft",
    duration:3,
    })
    return{contextHolder};
}


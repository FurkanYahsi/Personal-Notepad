import { Form, notification } from "antd";
import { v4 as uuidv4 } from 'uuid';


export const useNewNote = (defaultHeader, defaultBody) => {
    const [form] = Form.useForm();
    const [api,contextHolder] = notification.useNotification();

    const handleAddNote = (defaultHeader, defaultBody) => {
        
        form.validateFields().then(values => {
        const userEmail = localStorage.getItem("currentUser");
        if (!userEmail) {
            api.open({
                message:"",
                description:"No user is logged in!",
                placement:"bottomLeft",
                duration:3,
                style:{background:'#999999'}
            })
        }
        
        const newNote = {
            id: uuidv4(),
            header: defaultHeader + values.header,
            body: defaultBody + values.body,
            date: new Date().toLocaleString()
        };
        // Get all notes of currentUser
        const existingNotesFromFile = localStorage.getItem(userEmail);
        const existingNotes = existingNotesFromFile ? JSON.parse(existingNotesFromFile) : [];
        // Add new note
        const updatedNotes = [...existingNotes, newNote];
        // Save to localStorage
        localStorage.setItem(userEmail, JSON.stringify(updatedNotes));
        }).catch((error) => {console.log(error)});
        
    };
    return {
        form,
        handleAddNote,
        defaultHeader, 
        defaultBody
    }
}


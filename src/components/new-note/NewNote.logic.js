import { Form, notification } from "antd";
import { v4 as uuidv4 } from 'uuid';


export const useNewNote = (defaultId, defaultHeader, defaultBody) => {
    const [form] = Form.useForm();
    const [api,contextHolder] = notification.useNotification();

    const handleAddNote = (defaultId, defaultHeader, defaultBody) => {
        
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

        // Get all notes of currentUser
        const existingNotesFromFile = localStorage.getItem(userEmail);
        const existingNotes = existingNotesFromFile ? JSON.parse(existingNotesFromFile) : [];
        let newNote;
        let updatedNotes;

        if (defaultId === null) {
            newNote = {            
                id: uuidv4(),
                header: defaultHeader + values.header,
                body: defaultBody + values.body,
                date: new Date().toLocaleString()
            }; 
            // Add note to list
            updatedNotes = [...existingNotes, newNote];
                    
        } else {
            existingNotes.map((note)=> {
                if (note.id === defaultId) {
                    note.header=defaultHeader + values.header;
                    note.body=defaultBody + values.body;
                    note.date= new Date().toLocaleString();
                }
            })
            console.log(existingNotes);
            updatedNotes = [...existingNotes]; //Sorulacak-------------------------------------------------------------------------------------------
        }
        // Save to localStorage
        localStorage.setItem(userEmail, JSON.stringify(updatedNotes));
        }).catch((error) => {console.log(error)});
        
    };
    return {
        form,
        handleAddNote,
        defaultId,
        defaultHeader, 
        defaultBody
    }
}


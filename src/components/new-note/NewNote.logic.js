import { Form } from "antd";
import { v4 as uuidv4 } from 'uuid';

//Add functionality to buttons.
export const useNewNote = (defaultId, defaultHeader, defaultBody) => {
    const [form] = Form.useForm();

    const handleAddNote = (defaultId, defaultHeader, defaultBody) => {
        
        form.validateFields().then(values => {
        const userId = localStorage.getItem("currentUser");
    
        // Get all notes of currentUser
        const existingNotesFromFile = localStorage.getItem(userId);
        const existingNotes = existingNotesFromFile ? JSON.parse(existingNotesFromFile) : [];
        let newNote;
        let updatedNotes;

        //A new note
        if (defaultId === null) {
            newNote = {
                id: uuidv4(),
                userId: userId,
                header: values.header,
                body: values.body,
                date: new Date().toISOString()
            }; 
            // Add note to list
            updatedNotes = [...existingNotes, newNote];
                    
        } else {
            //An existing note
            existingNotes.map((note)=> {
                if (note.id === defaultId) {
                    note.header=defaultHeader + values.header;
                    note.body=defaultBody + values.body;
                    note.date= new Date().toISOString();
                }
            })
            updatedNotes = [...existingNotes];
        }
        // Save to localStorage
        localStorage.setItem(userId, JSON.stringify(updatedNotes));
        form.resetFields();
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


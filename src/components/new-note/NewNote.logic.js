import { Form, } from "antd";
import { v4 as uuidv4 } from 'uuid';

//Add functionality to buttons.
export const useNewNote = (defaultId, defaultHeader, defaultBody) => {
    const [form] = Form.useForm();

    const handleAddNote = (defaultId, defaultHeader, defaultBody) => {
        
        form.validateFields().then(values => {
        const userEmail = localStorage.getItem("currentUser");
    
        // Get all notes of currentUser
        const existingNotesFromFile = localStorage.getItem(userEmail);
        const existingNotes = existingNotesFromFile ? JSON.parse(existingNotesFromFile) : [];
        let newNote;
        let updatedNotes;

        //A new note
        if (defaultId === null) {
            newNote = {            
                id: uuidv4(),
                header: values.header,
                body: values.body,
                date: new Date().toLocaleString()
            }; 
            // Add note to list
            updatedNotes = [...existingNotes, newNote];
                    
        } else {
            //An existing note
            existingNotes.map((note)=> {
                if (note.id === defaultId) {
                    note.header=defaultHeader + values.header;
                    note.body=defaultBody + values.body;
                    note.date= new Date().toLocaleString();
                }
            })
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


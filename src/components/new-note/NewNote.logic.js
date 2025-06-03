import { Form } from "antd";
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { NoteContext } from '../../contexts/NoteContext';

//Add functionality to buttons.
export const useNewNote = () => {
    const [form] = Form.useForm();
    const{dispatch} = useContext(NoteContext);

    const handleAddNote = (defaultId, defaultHeader, defaultBody) => {
        
        form.validateFields().then(values => {
        const userId = localStorage.getItem("currentUser");
    
        // Get all notes of currentUser
        let existingNotes = [];

        try {
        const existingNotesFromFile = localStorage.getItem('notes');
        existingNotes = existingNotesFromFile ? JSON.parse(existingNotesFromFile) : [];
        } catch (e) {
            console.log(e);
            localStorage.removeItem('notes');
            existingNotes = [];
        }
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
            dispatch({ type: "ADD_NOTE", payload: newNote });
                    
        } else {
            //An existing note
            existingNotes.filter(note => note.userId === userId).map((note)=> {
                if (note.id === defaultId) {
                    note.header=defaultHeader + values.header;
                    note.body=defaultBody + values.body;
                    note.date= new Date().toISOString();
                }
            })
            updatedNotes = [...existingNotes];
            dispatch({ type: "EDIT_NOTE", payload: updatedNotes });
        }
        // // Save to localStorage
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
        // localStorage.setItem('newNoteAdded', true);
        form.resetFields();
        }).catch((error) => {console.log(error)});
        
    };
    return {
        form,
        handleAddNote,
        // defaultId,
        // defaultHeader, 
        // defaultBody
    }
}


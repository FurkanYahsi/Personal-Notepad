import { Form } from "antd";
import { v4 as uuidv4 } from 'uuid';

export const useNewNote = () => {
    const [form] = Form.useForm();


    const handleAddNote = async () => {
        try {
            form.validateFields().then(values => {
            const userEmail = localStorage.getItem("currentUser");
            if (!userEmail) return alert("No user is logged in!");

            const newNote = {
                id: uuidv4(),
                header: values.header,
                body: values.body,
                date: new Date().toLocaleString()
            };

            // Get all notes of currentUser
            const existingNotesJSON = localStorage.getItem(`notes_${userEmail}`);
            const existingNotes = existingNotesJSON ? JSON.parse(existingNotesJSON) : [];

            // Add new note
            const updatedNotes = [...existingNotes, newNote];

            // Save to localStorage
            localStorage.setItem(`notes_${userEmail}`, JSON.stringify(updatedNotes));

            form.resetFields();
            alert("Note saved!");
            });
        }
        catch(error) {
            console.log(error);
        }
        
    };
    return {
        form,
        handleAddNote
    }
}


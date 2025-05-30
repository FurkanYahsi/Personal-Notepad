import './NewNote.css'
import {useNewNote} from './NewNote.logic'
import { Form, Input, Button } from 'antd'

//Edit an existing note or create a new one.
const NewNote = (props) => {
    const{defaultId, defaultHeader, defaultBody} = props;
    const {form, handleAddNote} = useNewNote();
    return (
        <div className='newNote'>
            <Form
                className='form'
                form={form}
            >
                <Form.Item name="header" label="Title" rules={[{ required: true, min: 5, message: "Header must be at least 5 characters" }]} initialValue={defaultHeader} >
                    <Input className='inputBackground'/>
                </Form.Item>

                <Form.Item name="body" label="Body" rules={[{ required: true, min: 20, message: "Note must be at least 20 characters"  }]} initialValue={defaultBody}>
                    <Input.TextArea rows={10} className='inputBackground'/>
                </Form.Item>
                <Form.Item  className='formButtonWrapper'>
                    <Button color="default" variant="solid" onClick={() => {
                        handleAddNote(defaultId,'','');
                        }}>
                        Add
                    </Button>
                </Form.Item> 
            </Form>
        </div>            
    )
}
export default NewNote

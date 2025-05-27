import React from 'react'
import './NewNote.css'

import {useNewNote} from './NewNote.logic'
import { Form, Input, Button } from 'antd'
import { v4 as uuidv4 } from 'uuid';

uuidv4();

const NewNote = () => {
    const {form, handleAddNote} = useNewNote();

    return (

        <div className='newNote'>
            <Form
                className='form'
                form={form}
                wrapperCol={{span:18}}
            >
                <Form.Item name="header" label="Header" rules={[{ required: true, min: 5, message: "Header must be at least 5 characters" }]}>
                    <Input/>
                </Form.Item>

                <Form.Item name="body" label="Body" rules={[{ required: true, min: 20, message: "Note must be at least 20 characters"  }]}>
                    <Input.TextArea rows={10} />
                </Form.Item>
                <Form.Item  className='formButtonWrapper'>
                    <Button color="default" variant="solid" onClick={() => {
                        handleAddNote();
                        window.location.reload() //Yoruma da alınabilir
                        }}>
                        Add
                    </Button>
                </Form.Item>
            </Form>
        </div>
            
    )
}

export default NewNote

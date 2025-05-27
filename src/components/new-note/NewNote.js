import React from 'react'
import PropTypes from 'prop-types'
import './NewNote.css'

import {useNewNote} from './NewNote.logic'
import { Form, Input, Button } from 'antd'
import { v4 as uuidv4 } from 'uuid';

uuidv4();

const NewNote = (props) => {
    const {id, header, body, date} = props;
    const {form} = useNewNote();

    return (

        <div className='newNote'>
            <Form
                className='form'
                form={form}
                wrapperCol={{span:18}}
            >
                <Form.Item name="header" label="Header" >
                    <Input/>
                </Form.Item>

                <Form.Item name="body" label="Body" rules={[{ required: true }]}>
                    <Input.TextArea rows={10} />
                </Form.Item>
                <Form.Item  className='formButtonWrapper'>
                    <Button color="default" variant="solid" onClick={() => window.location.reload()}>
                        Add
                    </Button>
                </Form.Item>
            </Form>
        </div>
            
    )
}

export default NewNote

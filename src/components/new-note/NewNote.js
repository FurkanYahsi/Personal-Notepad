import React from 'react'
import {useNewNote} from './NewNote.logic'
import { Form, Input, Button } from 'antd'

const NewNote = () => {
    const {form} = useNewNote();

  return (
    <Form
        form={form}
        style={{paddingBlock:32}}
        labelCol={{span:6}}
        wrapperCol={{span:14}}
    >
        <Form.Item name="header" label="Header" >
            <Input/>
        </Form.Item>

        <Form.Item name="body" label="Body" rules={[{ required: true }]}>
            <Input.TextArea rows={6} />
        </Form.Item>
        <Button></Button>
    </Form>
  )
}

export default NewNote

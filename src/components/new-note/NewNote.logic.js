import React from 'react'
import { Form } from "antd";

export const useNewNote = () => {
    const [form] = Form.useForm();
    return {
        form
    }
}


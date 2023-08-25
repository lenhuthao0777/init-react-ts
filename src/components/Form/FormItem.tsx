import { Form } from 'antd'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  required?: boolean
  rules?: Array<any>
  label?: string
  name: string
}

const FormItem: React.FC<Props> = ({ children, rules, label, required, name }) => {
  return (
    <Form.Item label={label} name={name} rules={rules && rules}>
      {children}
    </Form.Item>
  )
}

export default FormItem

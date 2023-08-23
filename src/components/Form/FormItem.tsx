import { Form } from 'antd';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  require?: boolean;
  rules?: Array<any>;
  name: string
}

const FormItem: React.FC<Props> = ({ children, rules, require, name }) => {
  const validate = [
    {

    }
  ]
  return <Form.Item name={name} rules={rules && rules}>{children}</Form.Item>;
};

export default FormItem;

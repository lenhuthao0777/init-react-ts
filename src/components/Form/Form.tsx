import React, { ReactNode } from 'react';
import { Form } from 'antd';

interface Props {
  children: ReactNode;
  onSubmit: (data: any) => void;
}

const FormCustom: React.FC<Props> = ({ children, onSubmit }) => {
  return (
    <Form
      style={{ minWidth: 500 }}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete='off'
      onFinish={onSubmit}
    >
      {children}
    </Form>
  );
};

export default FormCustom;

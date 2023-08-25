import React, { ReactNode } from 'react';
import { Form } from 'antd';

interface Props {
  children: ReactNode;
  width?: number;
  labelCol?: number;
  wrapperCol?: number;
  onSubmit: (data: any) => void;
}

const FormCustom: React.FC<Props> = ({
  children,
  onSubmit,
  width = 500,
  labelCol = 4,
  wrapperCol = 20,
}) => {
  return (
    <Form
      style={{ width }}
      labelCol={{ span: labelCol }}
      wrapperCol={{ span: wrapperCol }}
      initialValues={{ remember: true }}
      autoComplete='off'
      onFinish={onSubmit}
    >
      {children}
    </Form>
  );
};

export default FormCustom;

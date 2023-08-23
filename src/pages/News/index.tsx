import Btn from '@/src/components/ButtonCustom';
import FormCustom from '@/src/components/Form/Form';
import InputCustom from '@/src/components/Inputs/InputCustom';
import React from 'react';

const News: React.FC = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormCustom onSubmit={onSubmit}>
      <InputCustom name='test' rules={['required', 'decimal']} />

      <Btn type='submit' label='Submit' />
    </FormCustom>
  );
};

export default News;

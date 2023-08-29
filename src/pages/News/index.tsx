import Btn from '@/src/components/ButtonCustom'
import FormCustom from '@/src/components/Form/Form'
import InputCustom from '@/src/components/Inputs/InputCustom'
import UseUrlParams from '@/src/hooks/use-url-params'
import { useAppSelector } from '@/src/store/hook'
import React from 'react'

const News: React.FC = () => {
  const { objQueries } = UseUrlParams()

  const data = useAppSelector((state) => state.auth)

  const onSubmit = (data: any) => {
    console.log(data)
  }

  console.log(data);
  

  return (
    <FormCustom onSubmit={onSubmit}>
      <InputCustom label='Test' name='test' rules={['required', 'decimal']} />
      <InputCustom label='Testw' name='testw' rules={['required', 'decimal']} />

      <Btn type='submit' label='Submit' />
    </FormCustom>
  )
}

export default News

import { useAppSelector } from '@/src/redux/hook'
import React from 'react'

function List() {
  const state = useAppSelector((state) => state.loading)

  console.log(state)

  return (
    <div className='text-lg text-zinc-900 font-semibold'>
      {state.isLoading ? 'true' : 'false'}
    </div>
  )
}

export default List

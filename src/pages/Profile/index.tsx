import { useAppSelector } from '@/src/store/hook'
import React from 'react'

function index() {
  const state = useAppSelector((state) => state.userInformation)

  console.log(state)

  return <div>Profiles</div>
}

export default index

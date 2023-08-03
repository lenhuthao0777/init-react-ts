import Loading from '@components/Loading'
import Nav from '@components/Nav'
import React, { PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'

const Client: React.FC<PropsWithChildren> = () => {
  return (
    <div className='h-vh mt-24'>
      <Nav />
      <div className='container'>
        <Outlet />
        <Loading />
      </div>
    </div>
  )
}

export default Client

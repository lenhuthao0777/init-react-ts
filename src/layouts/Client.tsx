import Loading from '@components/Loading'
import Nav from '@components/Nav'
import React, { PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'

const Client: React.FC<PropsWithChildren> = () => {
  return (
    <div className='h-vh bg-[#f1f2f6]'>
      <Nav />
      <div className='pt-[80px] relative m-auto w-[1200px]'>
        <div className='py-5'>
          <Outlet />
        </div>
        <Loading />
      </div>
    </div>
  )
}

export default Client

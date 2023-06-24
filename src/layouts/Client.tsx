import Loading from '@components/Loading'
import Nav from '@components/Nav'
import Toast from '@components/Toast'
import React, { PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'

const Client: React.FC<PropsWithChildren> = () => {
  return (
    <section className='h-vh bg-[#f1f2f6]'>
      <Nav />

      <div className='flex relative h-[calc(100vh-80px)]'>
        <div className='w-screen flex-1'>
          <div className='content'>
            <div className='overflow-auto h-full'>
              <div className='w-[1200px] m-auto p-4'>
                <Outlet />
              </div>
            </div>
            <Toast />
            <Loading />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Client

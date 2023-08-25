import Loading from '@components/Loading'
import Nav from '@components/Nav'
import React, { Fragment, PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'
import { AuthProvider } from '@/src/contexts/Auth.context'

const Client: React.FC<PropsWithChildren> = () => {
  return (
    <Fragment>
      <AuthProvider>
        <div className='h-vh bg-[#f1f2f6]'>
          <Nav />
          <div className='relative container'>
            <div className='mt-24'>
              <Outlet />
            </div>
            <Loading />
          </div>
        </div>
      </AuthProvider>
    </Fragment>
  )
}

export default Client

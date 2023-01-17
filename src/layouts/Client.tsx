import Loading from '@components/Loading'
import Nav from '@components/Nav'
import SideBar from '@components/SideBar'
import Toast from '@components/Toast'
import styled from '@emotion/styled'
import React, { PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'

const Client: React.FC<PropsWithChildren> = ({ children }) => {
  const ClientContainer = styled.div``

  return (
    <section className="h-vh" style={{ backgroundColor: '#f1f2f6' }}>
      <Nav />

      <div className="flex">
        <div className="w-screen flex-1">
          <div className="content pt-4 pl-4 pr-4 relative">
            <div className="overflow-auto h-full">
              <Outlet />
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

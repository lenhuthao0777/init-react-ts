import React, { PropsWithChildren, useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons'
import { Avatar, Image } from 'antd'
import Loading from '../components/Loading'
import SideBar from '../components/SideBar'
import { getCookie, setCookie } from '../hooks'
import Nav from '../components/Nav'

const roles: number[] = [1, 2, 4, 5]
type UserInfo = {
  email: string
  password: string
  role: number
}

const useAuth = () => {
  const userInfo: UserInfo = getCookie('userInfo')

  const partUserInfo: UserInfo = userInfo ? JSON.parse(userInfo as any) : {}

  const user: any = { loggedIn: roles.includes(Number(partUserInfo.role)) }

  return user && user.loggedIn
}

const Default: any = ({ children }: any) => {
  const auth = useAuth()

  useEffect(() => {
    return () => setCookie('userInfo', null)
  }, [auth])

  return auth ? (
    <div className="h-vh" style={{ backgroundColor: '#f1f2f6' }}>
      <div className="flex">
        <section className="nav w-60 h-screen" style={{ backgroundColor: '#ffffff' }}>
          <SideBar role={auth} />
        </section>

        <div className="w-screen flex-1">
          <Nav />

          <div className="content pt-4 pl-4 pr-4 relative h-80">
            <div className="overflow-auto h-full">
              {children}

              <Outlet />
              <Loading />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  )
}

export default Default

import { PropsWithChildren, ReactNode, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'
import SideBar from '../components/SideBar'
import { getCookie, setCookie } from '../hooks'
import Nav from '../components/Nav'
import { UserInfo } from '../types/global.type'
import { isEmpty } from 'lodash'

const roles: number[] = [1, 2, 4, 5]

interface authProps {
  children: ReactNode
}

type CheckUser = {
  loggedIn: boolean
  info: boolean
}

const useAuth = () => {
  const userInfo: UserInfo = getCookie('userInfo')

  const partUserInfo: UserInfo = userInfo ? JSON.parse(userInfo as any) : {}

  const user: any = { loggedIn: roles.includes(Number(partUserInfo.role)), info: isEmpty(partUserInfo) ? false : true }

  return user
}

const Default = ({ children }: PropsWithChildren) => {
  const auth: CheckUser = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    if (!auth.info) {
      return navigate('/login')
    } else if (!auth.loggedIn) {
      return navigate('/')
    }
  }, [])

  return (
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
  )
}

export default Default

import { PropsWithChildren, ReactNode, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'
import SideBar from '../components/SideBar'
import { getCookie } from '../hooks'
import Nav from '../components/Nav'
import { UserInfo } from '../types/global.type'
import { isEmpty } from 'lodash'
import 'react-toastify/dist/ReactToastify.css'
import Toast from '@components/Toast'
import { css } from '@emotion/react'
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

const Admin = ({ children }: PropsWithChildren) => {
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
    <div className="h-vh">
      <div className="flex">
        <section className="nav w-60 h-screen bg-white">
          <SideBar role={auth} />
        </section>

        <section className="w-screen  flex-1">
          <Nav />

          <section
            css={css`
              height: calc(100vh - 80px);
            `}
            className="content relative pt-4 pl-4 pr-4 "
          >
            <div className="overflow-auto h-full">
              {children}

              <Outlet />
              <Toast />
              <Loading />
            </div>
          </section>
        </section>
      </div>
    </div>
  )
}

export default Admin

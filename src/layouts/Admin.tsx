import { PropsWithChildren, ReactNode, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'
import SideBar from '../components/SideBar'
import { getCookie } from '../utils'
import Nav from '../components/Nav'
import { UserInfo } from '../types/global.type'
import { isEmpty } from 'lodash'
import { ROUTER_ENUM } from '@src/routers/Router.enum'
import { HomeContext } from '@src/contexts/home.context'
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

  const user: any = {
    loggedIn: roles.includes(Number(partUserInfo.role)),
    info: isEmpty(partUserInfo) ? false : true,
  }

  return user
}

const Admin = ({ children }: PropsWithChildren) => {
  // const auth: CheckUser = useAuth()

  const navigate = useNavigate()

  // useEffect(() => {
  //   if (!auth.info) {
  //     return navigate(ROUTER_ENUM.LOGIN)
  //   } else if (!auth.loggedIn) {
  //     return navigate(ROUTER_ENUM.NOT_FOUND)
  //   }
  // }, [])

  return (
    <div>
      <Nav />
      <div className='flex flex-1 relative pt-[80px]'>
        <SideBar />
        <div className='pl-[280px] relative flex-1'>
          <HomeContext>
            <div className='p-5'>
              <Outlet />
              <Loading />
            </div>
          </HomeContext>
        </div>
      </div>
    </div>
  )
}

export default Admin

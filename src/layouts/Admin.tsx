import { FC, Fragment, ReactNode, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { isEmpty } from 'lodash'

// Components
import Loading from '../components/Loading'
import SideBar from '../components/SideBar'
import { getCookie } from '../lib/Utils'
import Nav from '../components/Nav'
import { UserInfo } from '../types/global.type'
import { ROUTER_ENUM } from '@src/routers/Router.enum'
import { HomeContext } from '@/src/contexts/Home.context'

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
    info: isEmpty(partUserInfo) ? false : true
  }

  return user
}

const Admin: FC = () => {
  const auth: CheckUser = useAuth()

  const navigate = useNavigate()

  // useEffect(() => {
  //   if (!auth.info) {
  //     return navigate('/login')
  //   } else if (!auth.loggedIn) {
  //     return navigate('/*')
  //   }
  // }, [])

  return (
    <Fragment>
      <Nav />
      <SideBar />
      <div className='ml-72 max-lg:mx-auto h-full relative'>
        <HomeContext>
          <div className='container mx-auto max-lg:mt-24 max-lg:mb-24'>
            <div className='mt-24 p-5'>
              <Outlet />
            </div>
            <Loading />
          </div>
        </HomeContext>
      </div>
    </Fragment>
  )
}

export default Admin

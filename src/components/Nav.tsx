import { cn, eraseCookie } from '@src/lib/Utils'
import { useLocation, useNavigate } from 'react-router-dom'
import { includes } from 'lodash'
import { useTranslation } from 'react-i18next'
import Logo from './Logo'
import { Fragment, ReactNode, useContext } from 'react'
import { UserOutlined } from '@ant-design/icons'
import { Avatar, Popover } from 'antd'
import { AuthContext } from '@src/contexts/Auth.context'
import { useAppDispatch } from '@src/store/hook'
import { logout } from '@src/store/features/Auth'
import { useGetUserQuery } from '@src/store/features/AuthApi'

function Nav() {
  const [user, isLoading] = useContext(AuthContext)

  const dispatch = useAppDispatch()

  const location = useLocation()

  const navigate = useNavigate()

  const { t } = useTranslation()

  const admin = includes(location.pathname, 'admin')

  const Logout = () => {
    dispatch(logout())
    // eraseCookie('userInfo')
    navigate('/login')
  }

  const content = (
    <div>
      <p className='cursor-pointer' onClick={Logout}>
        {t('logout')}
      </p>
      <p>{t('profile')}</p>
    </div>
  )

  const menus: Array<{ id: number; title: string | ReactNode }> = [
    {
      id: 1,
      title: t('job')
    },
    {
      id: 2,
      title: t('application')
    },
    {
      id: 3,
      title: t('company')
    },
    {
      id: 4,
      title: t('tool')
    },
    {
      id: 5,
      title: (
        <Popover placement='topRight' content={content} title={user?.email}>
          {user ? (
            <img src={user?.profile?.avatar?.url} alt='img' className='w-6 h-6 rounded-full object-cover' />
          ) : (
            <Avatar className='cursor-pointer' icon={<UserOutlined size={24} />} />
          )}
        </Popover>
      )
    }
  ]

  return (
    <header
      className={cn('fixed top-0 left-0 flex items-center justify-between w-full bg-white h-20 px-20 shadow z-10')}
    >
      <div className='flex items-center'>
        <Fragment>
          <Logo />
        </Fragment>
      </div>
      <div className='flex'>
        {!admin ? (
          <ul className='ml-10 flex items-center'>
            {menus.map((item: any) => (
              <li
                key={item.id}
                className='list-none text-base p-5 cursor-pointer hover:text-blue-1 transition-all ease-in font-semibold'
              >
                {item.title}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </header>
  )
}

export default Nav

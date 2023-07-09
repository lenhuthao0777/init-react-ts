import { Avatar, Popover } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { eraseCookie } from '../utils'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import { includes } from 'lodash'
import { useTranslation } from 'react-i18next'
import { COMMON } from '@src/enums/global.enum'
import Logo from './Logo'
import { Fragment } from 'react'
function Nav() {
  const location = useLocation()

  const navigate = useNavigate()

  const { t } = useTranslation()

  const admin = includes(location.pathname, 'admin')

  const menus: Array<{ id: number; title: string }> = [
    {
      id: 1,
      title: t('job'),
    },
    {
      id: 2,
      title: t('application'),
    },
    {
      id: 3,
      title: t('company'),
    },
    {
      id: 4,
      title: t('tool'),
    },
  ]

  const Logout = () => {
    eraseCookie('userInfo')

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

  // const SectionContainer = styled.section`
  //   width: 100%;
  //   height: 80px;
  //   background: ${COMMON.bg_nav};
  //   cursor: pointer;
  //   ${admin
  //     ? ` display: flex;
  //           align-items: center;
  //           justify-content: space-between;`
  //     : `
  //           display: flex;
  //           align-items: center;
  //           justify-content: flex-end;
  //       `}
  // `

  return (
    <header
      className={`z-10 h-[80px] px-[100px] shadow-md fixed flex items-center justify-between w-full bg-white`}
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
        {/* <Popover placement='topRight' content={content} title='Johnny'>
        </Popover> */}
        {/* <Avatar className='cursor-pointer' icon={<UserOutlined />} /> */}
      </div>
    </header>
  )
}

export default Nav

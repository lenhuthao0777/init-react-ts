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

  const isNews = includes(location.pathname, 'news')

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

  const SectionContainer = styled.section`
    width: 100%;
    height: 80px;
    background: ${COMMON.bg_nav};
    cursor: pointer;
    ${isNews
      ? ` display: flex;
            align-items: center;
            justify-content: space-between;`
      : `
            display: flex;
            align-items: center;
            justify-content: flex-end;;
        `}
  `

  return (
    <div
      className={`h-[80px] px-[30px] flex items-center justify-between w-full bg-gradient-to-r from-blue-1 to-blue-3`}
    >
      <div className='flex items-center'>
        {isNews ? (
          <Fragment>
            <Logo />
            <ul className='ml-10 flex'>
              {menus.map((item: any) => (
                <li
                  key={item.id}
                  className='list-none text-white font-bold text-sm p-5 cursor-pointer hover:text-slate-200 transition-all ease-in'
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </Fragment>
        ) : null}
      </div>
      <div className='flex'>
        {/* <Popover placement='topRight' content={content} title='Johnny'>
        </Popover> */}
        <Avatar className='cursor-pointer' icon={<UserOutlined />} />
      </div>
    </div>
  )
}

export default Nav

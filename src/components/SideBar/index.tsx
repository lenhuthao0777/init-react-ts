import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
// Components
import { ROUTER_ENUM } from '../../routers/Router.enum'
import { useTranslation } from 'react-i18next'
import Logo from '../Logo'
import { Fragment, useState } from 'react'
import MenuItem from './MenuItem'

const SideBar: any = () => {
  const { t } = useTranslation()

  const menuSideBar = [
    {
      label: 'Job',
      path: '',
      icon: <FaHome />,
      sub: [
        {
          label: 'Home',
          path: 'home',
        },
        {
          label: 'Profile',
          path: 'profile',
        },
      ],
    },
  ]

  return (
    <>
      <div className='h-20 flex items-center justify-center'>
        <Link to={ROUTER_ENUM.BASE_URL}>
          <Logo />
        </Link>
      </div>
      <div className='mt-1'>
        <ul>
          {menuSideBar.map((item) => (
            <MenuItem
              key={item.label}
              label={item.label}
              icon={item.icon}
              subMenu={item.sub}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

export default SideBar

import React, { useState } from 'react'
import { AppstoreOutlined, CalendarOutlined, SettingOutlined, HomeOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import type { MenuProps, MenuTheme } from 'antd/es/menu'
import { css } from '@emotion/react'
import { Link, NavLink, useLocation } from 'react-router-dom'

// Components
import Logo from '../assets/imgs/logo-udemy.svg'
import { ROUTER_ENUM } from '../routers/Router.enum'
type MenuItem = Required<MenuProps>['items'][number]

const SideBar: any = ({ role }: any) => {
  const [mode, setMode] = useState<'vertical' | 'inline'>('inline')
  const [theme, setTheme] = useState<MenuTheme>('light')
  const location = useLocation()
  console.log(location)

  const getItem = (label: React.ReactNode, key?: React.Key | null, icon?: React.ReactNode, children?: MenuItem[]): MenuItem => {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem
  }

  const items: MenuItem[] = [
    getItem(
      <Link style={{ color: 'red' }} to={ROUTER_ENUM.BASE_URL}>
        Home
      </Link>,
      '1',
      <HomeOutlined />
    ),
    getItem('Navigation Two', '2', <CalendarOutlined />),
    getItem('Navigation Two', 'sub1', <AppstoreOutlined />, [
      getItem('Option 3', '3'),
      getItem('Option 4', '4'),
      getItem('Submenu', 'sub1-2', null, [getItem('Option 5', '5'), getItem('Option 6', '6')]),
    ]),
    getItem('Navigation Three', 'sub2', <SettingOutlined />, [
      getItem('Option 7', '7'),
      getItem('Option 8', '8'),
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
    ]),
  ]

  const changeMode = (value: boolean) => {
    setMode(value ? 'vertical' : 'inline')
  }

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light')
  }

  const header_side_bar = css`
    display: flex;
    align-items: center;
    justify-content: center;
  `

  const header_img = css`
    width: 125px;
  `

  return (
    <>
      {/* <Switch onChange={changeMode} /> Change Mode
      <Divider type="vertical" />
      <Switch onChange={changeTheme} /> Change Style
      <br />
      <br /> */}
      <div css={header_side_bar} className="logo h-20">
        <Link to={ROUTER_ENUM.BASE_URL}>
          <img css={header_img} src={Logo} alt="img" />
        </Link>
      </div>
      <Menu style={{ width: 240, height: '80%' }} defaultSelectedKeys={['1']} defaultOpenKeys={['']} mode={mode} theme={theme} items={items} />
    </>
  )
}

export default SideBar

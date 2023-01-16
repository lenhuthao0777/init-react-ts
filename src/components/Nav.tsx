import { Avatar, Popover } from 'antd'
import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import { eraseCookie } from '../hooks'
import { useNavigate } from 'react-router-dom'

function Nav() {
  const navigate = useNavigate()
  const Logout = () => {
    eraseCookie('userInfo')

    navigate('/login')
  }

  const content = (
    <div>
      <p className='cursor-pointer' onClick={Logout}>
        Logout
      </p>
      <p>Profile</p>
    </div>
  )

  return (
    <section className='header-nav w-full h-20 bg-blue-400 flex items-center justify-end p-2'>
      <Popover placement='topRight' content={content} title='Johnny'>
        <Avatar className='cursor-pointer' icon={<UserOutlined />} />
      </Popover>
    </section>
  )
}

export default Nav

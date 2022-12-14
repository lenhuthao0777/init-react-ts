import { Avatar, Button, Popover } from 'antd'
import React from 'react'
import { UserOutlined } from '@ant-design/icons'

function Nav() {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  )

  return (
    <section className="header-nav w-full h-20 bg-blue-400 flex items-center justify-end p-2">
      <Popover placement="topRight" content={content} title="Title">
        <Avatar className="cursor-pointer" icon={<UserOutlined />} />
      </Popover>
    </section>
  )
}

export default Nav

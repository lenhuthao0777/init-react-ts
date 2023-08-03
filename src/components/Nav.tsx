import React from 'react'
import Logo from './Logo'

function Nav() {
  return (
    <div className='bg-white fixed top-0 left-0 w-full h-20 flex items-center'>
      <div className='container'>
        <Logo />
      </div>
    </div>
  )
}

export default Nav

import Collapse from '@components/Collpase'
import { FC, ReactNode, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

type TPropsType = {
  label: string
  icon: ReactNode
  subMenu: any
}

const MenuItem: FC<TPropsType> = ({ label, icon, subMenu }) => {
  const [active, setActive] = useState<boolean>(false)

  const hdSubMenu = () => {
    setActive(!active)
  }
  return (
    <li className=''>
      <p
        onClick={hdSubMenu}
        className={`flex items-center justify-between p-3 rounded-sm cursor-pointer hover:bg-slate-300 ease-in transition `}
      >
        <span className='flex items-center'>
          <span className='mr-2'>{icon}</span>
          <span className='text-base'>{label}</span>
        </span>
        <span className={`flex ${active ? 'rotate-180' : ''}`}>
          <FaAngleDown />
        </span>
      </p>

      <Collapse lazy open={active}>
        <ul className='sub shadow-sm bg-[rgba(0,0,0,0.02)]'>
          {subMenu.map((x: any) => (
            <li
              key={x.label}
              className={`text-sm cursor-pointer hover:opacity-90 transition-all ease-in`}
            >
              <NavLink
                style={({ isActive, isPending }) => {
                  return {
                    backgroundColor: isActive ? '#60a4fa' : '',
                    color: isActive ? '#ffffff' : '',
                  }
                }}
                className='w-full pl-9 py-2 flex rounded-sm hover:text-gray-900'
                to={x.path}
              >
                <span>{x.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </Collapse>
    </li>
  )
}

export default MenuItem

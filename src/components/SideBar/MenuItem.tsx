import Collapse from '@components/Collpase'
import { FC, ReactNode, useState } from 'react'
import { DownOutlined } from '@ant-design/icons'
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
    <li className='p-3'>
      <div
        onClick={hdSubMenu}
        className={`flex items-center justify-between p-2 rounded-sm cursor-pointer hover:bg-slate-50 ease-in transition `}
      >
        <div className='flex items-center'>
          <span className='mr-2 flex items-center justify-center text-base'>
            {icon}
          </span>
          <span className='text-base'>{label}</span>
        </div>
        <div className={`flex text-base ${active ? 'rotate-180' : ''}`}>
          <DownOutlined />
        </div>
      </div>

      <Collapse lazy open={active}>
        <ul className='shadow-sm bg-[rgba(0,0,0,0.02)]'>
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

import { HomeOutlined } from '@ant-design/icons'
// Components
import { useTranslation } from 'react-i18next'
import MenuItem from './MenuItem'

const SideBar: any = () => {
  const { t } = useTranslation()

  const menuSideBar = [
    {
      label: 'Job',
      path: '',
      icon: <HomeOutlined />,
      sub: [
        {
          label: 'Home',
          path: 'home',
          isPrivate: false
        },
        {
          label: 'Profile',
          path: 'profile',
          isPrivate: false
        }
      ]
    }
  ]

  return (
    <div className='fixed top-20 left-0 h-full w-72 bg-white overflow-hidden shadow-sm z-10'>
      <div className='overflow-auto'>
        <ul>
          {menuSideBar.map((item) => (
            <MenuItem key={item.label} label={item.label} icon={item.icon} subMenu={item.sub} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar

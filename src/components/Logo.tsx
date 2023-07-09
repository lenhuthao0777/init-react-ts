import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import icon from '@/public/icon.svg'
const Logo: FC = () => {
  const navigate = useNavigate()

  const handleBackToHome = () => {
    navigate('/')
  }

  return (
    <div>
      <p
        onClick={handleBackToHome}
        className='w-[200px] text-base font-bold cursor-pointer flex items-center'
      >
        <img className='w-10' src={icon} alt='icon img' />
        <span className='ml-2 font-bold text-2xl'>HOME BREW</span>
      </p>
    </div>
  )
}

export default Logo

import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const Logo: FC = () => {
  const navigate = useNavigate()

  const handleBackToHome = () => {
    navigate('/')
  }

  return (
    <div>
      <p
        onClick={handleBackToHome}
        className=' w-[120px] text-white font-bold cursor-pointer flex items-center'
      >
        <span className='text-3xl text-orange-200'>m</span>
        <span className='text-4xl text-purple-200'>Y</span>
        <span className='ml-1 text-4xl text-green-200'>J</span>
        <span className='text-2xl text-yellow-200'>o</span>
        <span className='text-3xl text-red-300 rotate-180'>B</span>
      </p>
    </div>
  )
}

export default Logo

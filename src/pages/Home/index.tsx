import { useAppDispatch } from '@/src/redux/hook'
import { showLoader } from '@/src/redux/slices/Loading'
import { FC, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import HomeList from './HomeList'
function HomePage() {
  const dispatch = useAppDispatch()

  const hd = () => {
    console.log('submit')

    dispatch(showLoader(true))
  }

  const homeRef = useRef<any>(null)

  useEffect(() => {
    console.log(homeRef.current?.['homeState'])
  }, [])

  return (
    <>
      <h2>Home</h2>
      <Link to={'/list'} className='p-3 bg-red-300 rounded-md'>
        List
      </Link>
      <Link to={'/post'} className='p-3 bg-red-300 rounded-md'>
        Post
      </Link>
      <button
        onClick={hd}
        className='p-5 bg-emerald-500 text-white font-semibold rounded-md'
      >
        Submit
      </button>

      <HomeList ref={homeRef} />
    </>
  )
}

export default HomePage

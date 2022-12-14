import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Home from '../../apis/Home'
import { useAppDispatch, useAppSelector } from '../../app/hook'
import { getData } from '../../features/Home'

function List() {
  const { data } = useAppSelector((state) => state.home)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  console.log(data)

  useEffect(() => {
    getList()
  }, [])

  const getList = async () => {
    const { data } = await Home.getData()
    dispatch(getData(data))
  }

  const click = () => {
    navigate('/login')
  }
  return (
    <div>
      <button onClick={click}>List</button>
    </div>
  )
}

export default List

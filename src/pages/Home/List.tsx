import { useEffect } from 'react'
import Home from '../../apis/Home'
import { useAppDispatch, useAppSelector } from '../../app/hook'
import { getData } from '../../features/Home'

function List() {
  // const { data } = useAppSelector((state) => state.home)

  // const auth = useAppSelector((state) => state.userInformation)
  
  // const dispatch = useAppDispatch()

  // console.log(data)

  useEffect(() => {
    getList()
  }, [])

  const getList = async () => {
    // const { data } = await Home.getData()
    // dispatch(getData(data))
  }

  return (
    <div>
      <button>List</button>
    </div>
  )
}

export default List

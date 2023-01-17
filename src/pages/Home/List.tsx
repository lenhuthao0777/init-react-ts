import Auth from '@src/apis/Auth.api'
import { showLoader } from '@src/features/Loading'
import { showToast } from '@src/hooks'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hook'

function List() {
  const [data, setData] = useState<any>()

  const dispatch = useAppDispatch()

  useEffect(() => {
    getList()
  }, [])

  const getList = async () => {
    dispatch(showLoader(true))
    try {
      const { data } = await Auth.list()

      setData(data)
    } catch (error) {
      showToast('error', 'Get data failure!')
    } finally {
      showToast('success', 'Get data success!')
      dispatch(showLoader(false))
    }
  }

  return (
    <div>
      <button>List</button>
    </div>
  )
}

export default List

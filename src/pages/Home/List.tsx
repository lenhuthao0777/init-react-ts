import TableBase from '@components/TableBase'
import Auth from '@src/apis/Auth.api'
import User from '@src/apis/User.api'
import { showLoader } from '@src/features/Loading'
import { showToast } from '@src/hooks'
import { useEffect, useMemo, useState } from 'react'
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
      const { data } = await User.list()

      setData(data)
    } catch (error) {
      showToast('error', 'Get data failure!')
    } finally {
      showToast('success', 'Get data success!')
      dispatch(showLoader(false))
    }
  }

  const dataTable = useMemo(() => {
    return data
  }, [data])

  return (
    <>
      <TableBase data={data} />
    </>
  )
}

export default List

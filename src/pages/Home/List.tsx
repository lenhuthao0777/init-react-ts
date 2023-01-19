import TableBase from '@components/TableBase'
import Auth from '@src/apis/Auth.api'
import User from '@src/apis/User.api'
import { showLoader } from '@src/features/Loading'
import { showToast } from '@src/hooks'
import { TableBaseHeaderType } from '@src/types/global.type'
import { useEffect, useMemo, useState, useTransition } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hook'

function List() {
  const [dataTable, setDataTable] = useState<[]>()
  const dispatch = useAppDispatch()

  useEffect(() => {
    getList()
  }, [])

  const getList = async () => {
    dispatch(showLoader(true))
    try {
      const { data } = await User.list()

      setDataTable(data)
    } catch (error) {
      showToast('error', 'Get data failure!')
    } finally {
      showToast('success', 'Get data success!')
      dispatch(showLoader(false))
    }
  }

  const header: TableBaseHeaderType[] | undefined = useMemo(() => {
    return dataTable?.map(() => ({
      title: 'abc',
      rowSpan: null,
      colSPan: null,
      width: null,
      height: null,
      border: null,
    }))
  }, [dataTable])

  return (
    <>
      <TableBase header={header} dataSource={[]} />
    </>
  )
}

export default List

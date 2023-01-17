import Auth from '@src/apis/Auth.api'
import { hiddenLoader, showLoader } from '@src/features/Loading'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hook'

function List() {
  useEffect(() => {
    getList()
  }, [])

  const getList = async () => {
    const { data } = await Auth.list()
  }

  return (
    <div>
      <button>List</button>
    </div>
  )
}

export default List

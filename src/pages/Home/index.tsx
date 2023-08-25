import { useAppSelector } from '@/src/app/hook'
import Btn from '@components/ButtonCustom'
import PaginationCustom from '@components/Pagination'
import HomeService from '@src/apis/Home.api'
import { HomeContext, Context } from '@/src/contexts/Home.context'
import { DATE_FORMAT } from '@src/enums/global.enum'
import { Select, Table } from 'antd'
import moment from 'moment'
import { useContext, useEffect, useMemo, useState } from 'react'
function Home() {
  const state = useAppSelector((state) => state.userInformation)

  useEffect(() => {
    console.log(state)
  }, [])

  return (
    <>
      <h2>Home</h2>
    </>
  )
}

export default Home

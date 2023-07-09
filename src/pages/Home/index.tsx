import Btn from '@components/ButtonCustom'
import PaginationCustom from '@components/Pagination'
import HomeService from '@src/apis/Home.api'
import { HomeContext, Context } from '@src/contexts/home.context'
import { DATE_FORMAT } from '@src/enums/global.enum'
import UrlParam from '@src/hooks/urlParam.hook'
import { Select, Table } from 'antd'
import moment from 'moment'
import { useContext, useEffect, useMemo, useState } from 'react'
function Home() {
  return (
    <>
      <h2>Home</h2>
    </>
  )
}

export default Home

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
  const [list, setList] = useState<any>()

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const [pg, setPg] = useState<any>({})

  const [state, dispatch] = useContext(Context)

  const { pathName, objQueries, setQueries, selectOptions } = UrlParam()

  const columns = useMemo(() => {
    return [
      {
        title: 'GRAND PRIX',
        dataIndex: 'grand_prix',
        key: 'grand',
      },
      {
        title: 'CAR',
        dataIndex: 'car',
        key: 'car',
      },
      {
        title: 'DATE',
        dataIndex: 'date',
        key: 'date',
        render: (i: any, record: any) => {
          return <span>{moment(record.date).format(DATE_FORMAT.ymd1)}</span>
        },
      },
      {
        title: 'LAPS',
        dataIndex: 'laps',
        key: 'laps',
      },
      {
        title: 'TIME',
        dataIndex: 'time',
        key: 'time',
      },
      {
        title: 'WINNER',
        dataIndex: 'winner',
        key: 'winner',
      },
      {
        title: '',
        dataIndex: 'action',
        key: 'winner',
      },
    ]
  }, [])

  const year = [
    {
      label: '2019',
      value: '2019',
    },
    {
      label: '2020',
      value: '2020',
    },
    {
      label: '2021',
      value: '2021',
    },
    {
      label: '2022',
      value: '2022',
    },
    {
      label: '2023',
      value: '2023',
    },
  ]

  const fetchData = async (params?: any) => {
    setIsLoading(true)

    try {
      const { data, pagination } = await HomeService.list({
        ...objQueries,
        ...params,
      })
      setList(data)
      setPg(pagination)
      setIsLoading(false)
    } catch (error) {
      return error
    }
  }

  const search = () => {
    fetchData()
  }

  const onPg = (page: any, pageSize: any) => {
    setQueries({ page, page_size: pageSize })
    fetchData({ page, page_size: pageSize })
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>
      <div className='flex items-end justify-end mb-3'>
        <div className='flex flex-col mr-3'>
          <span>Year</span>
          <Select
            style={{ width: 120 }}
            options={year}
            onChange={(val, option) => selectOptions(val, option, 'year')}
          />
        </div>

        <Btn label='search' onClick={()=>dispatch('test')} />
      </div>
      <Table
        rowKey={'_id'}
        loading={isLoading}
        columns={columns}
        dataSource={list}
        pagination={false}
      />
      <PaginationCustom
        page={pg.page}
        total_page={pg.total_page}
        onChange={onPg}
      />
    </>
  )
}

export default Home

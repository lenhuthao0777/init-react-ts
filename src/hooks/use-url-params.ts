import { removeEmpty } from '@/src/lib/Utils'
import { useEffect, useMemo, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

const UseUrlParams = (initParams?: any) => {
  const [data, setData] = useState()

  const [searchParams, setSearchPrams] = useSearchParams()

  const location = useLocation()

  const params = Object.fromEntries([...searchParams])

  const pathName: string = location.pathname

  const objQueries: any = useMemo(() => {
    const result: any = {
      page: 1,
      page_size: 10,
      ...params
    }

    return removeEmpty(result)
  }, [params])

  const setQueries = (queries: any) => {
    setSearchPrams({ ...initParams, ...objQueries, ...queries })
  }

  const selectOptions = (value: any, option: any, filed: string) => {
    setQueries({ [filed]: value })
  }

  useEffect(() => {
    setQueries({ ...initParams })
  }, [])

  return {
    pathName,
    objQueries,
    setQueries,
    selectOptions
  }
}

export default UseUrlParams

import { removeEmpty } from '@src/utils'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

const UrlParam = (initParams?: any) => {
  const [data, setData] = useState()

  const [searchParams, setSearchPrams] = useSearchParams()

  const location = useLocation()

  const pathName: string = location.pathname

  const objQueries: any = useMemo(() => {
    let result: any = {
      page: 1,
      page_size: 10
    }

    for (let [key, value] of searchParams.entries()) {
      result = {
        ...result,
        [key]: value,
      }
    }

    return removeEmpty(result)
  }, [searchParams.entries()])

  const setQueries = (queries: any) => {
    setSearchPrams({ ...initParams, ...objQueries, ...queries })
  }

  // const fetch = async (callback: () => void) => {
  //   await callback()
  // }

  const selectOptions = (value: any, option: any, filed: string) => {
    setQueries({ [filed]: value })
  }

  useEffect(() => {
    setQueries({ ...initParams })
  }, [])

  return { pathName, objQueries, setQueries, selectOptions }
}

export default UrlParam

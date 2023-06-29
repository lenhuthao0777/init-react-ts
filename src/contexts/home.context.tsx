import HomeService from '@src/apis/Home.api'
import UrlParam from '@src/hooks/urlParam.hook'
import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'

const initState: any = {
  data: [],
  isLoading: true,
}

type Action = {
  type: string
}

const reducer = (state: typeof initState, action: Action) => {
  switch (action.type) {
    case 'test':
      return { ...state, isLoading: false }
    default:
      break
  }
}

const Context = createContext({})

const HomeContext = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initState)

  const [data, setData] = useState(null)

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const { objQueries } = UrlParam({ page: 1, page_size: 10 })

  const fetchList = async () => {
    setIsLoading(true)
    try {
      const { data } = await HomeService.list({ ...objQueries })
      setData(data)
      setIsLoading(false)
    } catch (error) {
      return error
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  const value = {
    data,
    isLoading,
  }

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  )
}

export { HomeContext, Context }

import { ReactNode, createContext, useReducer } from 'react'

const initState: any = {
  data: [],
  isLoading: true
}

type Action = {
  type: string
}

const reducer = (state: typeof initState, action: Action): void => {
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

  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
}

export { HomeContext, Context }

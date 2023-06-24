import { FC, ReactNode } from 'react'
import { Route } from 'react-router-dom'

type Props = {
  children?: ReactNode
  path: string
  element: ReactNode
}

const Auth: FC<Props> = ({ children, path, element }) => {
  return (
    <Route path={path} element={element}>
      {children}
    </Route>
  )
}

export default Auth

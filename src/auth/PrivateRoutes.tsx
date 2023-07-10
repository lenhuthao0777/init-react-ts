import { FC, ReactNode } from 'react'
import { Route } from 'react-router-dom'

type Props = {
  children?: ReactNode
  path?: string
  element?: ReactNode
  idx?: boolean
}

const PrivateRoutes: FC<Props> = ({ children, path, element, idx = true }) => {
  return (
    <Route path={path} element={element}>
      {children}
    </Route>
  )
}

export default PrivateRoutes

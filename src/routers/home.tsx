import { lazy } from 'react'
import { v4 as uuid } from 'uuid'

const HomePage = lazy(() => import('@pages/Home'))

const HomeRoute = {
  id: uuid(),
  path: '',
  loader: () => {},
  children: [
    {
      id: uuid(),
      path: '',
      element: <HomePage />,
      loader: () => {},
      index: true,
    },
  ],
}

export default HomeRoute

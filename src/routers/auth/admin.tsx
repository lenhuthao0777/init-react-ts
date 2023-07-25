import { v4 as uuid } from 'uuid'
import { lazy } from 'react'

import HomeRoute from '../home'

const Admin = lazy(() => import('@layouts/Admin'))

const AdminRoute = {
  id: uuid(),
  path: '/admin',
  element: <Admin />,
  routes: [HomeRoute],
}

export default AdminRoute

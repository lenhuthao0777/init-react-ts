import Client from '@layouts/Client'
import { v4 as uuid } from 'uuid'

import HomeRoute from '../home'

const ClientRoute = {
  id: uuid(),
  path: '',
  element: <Client />,
  routes: [HomeRoute],
}

export default ClientRoute

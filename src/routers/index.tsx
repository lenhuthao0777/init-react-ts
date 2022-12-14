import { Fragment, lazy } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { v4 as uuid } from 'uuid'
// component
import Default from '../layouts/Default'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Error from '../pages/Error/Error'
import Auth from '../auth'

// ENUM
import { ROUTER_ENUM } from './Router.enum'

type router = {
  path: string
  element: () => JSX.Element
  loader: () => void
  errorElement: () => JSX.Element
  children: children[]
}

type children = {
  path: string
  element: () => JSX.Element
  loader: () => void
  errorElement: () => JSX.Element
}

const routers = [
  {
    id: uuid(),
    path: ROUTER_ENUM.BASE_URL,
    element: <Default />,
    loader: () => {},
    errorElement: <Error />,
    children: [
      {
        id: uuid(),
        path: ROUTER_ENUM.DEFAULT,
        element: <Home />,
        loader: () => {},
        errorElement: <Error />,
      },
    ],
  },
  {
    id: uuid(),
    path: ROUTER_ENUM.PROFILE,
    element: <Default />,
    loader: () => {},
    errorElement: <Error />,
    children: [
      {
        id: uuid(),
        path: ROUTER_ENUM.DEFAULT,
        element: <Profile />,
        loader: () => {},
        errorElement: <Error />,
      },
    ],
  },
  {
    id: uuid(),
    path: ROUTER_ENUM.LOGIN,
    loader: () => {},
    errorElement: <Error />,
    children: [
      {
        id: uuid(),
        path: ROUTER_ENUM.DEFAULT,
        element: <Login />,
        loader: () => {},
        errorElement: <Error />,
      },
    ],
  },
  // {
  //   id: uuid(),
  //   path: ROUTER_ENUM.NOT_FOUND,
  //   loader: () => {},
  //   errorElement: <Error />,
  //   children: [],
  // },
]

const ListRouters = routers.map((route) => (
  <Route
    element={route.element}
    path={route.path}
    key={route.id}
    errorElement={route.errorElement}
  >
    {route.children.length &&
      route.children.map((child) => (
        <Route
          key={child.id}
          element={child.element}
          path={child.path}
          errorElement={child.errorElement}
        />
      ))}
  </Route>
))

const router = createBrowserRouter(createRoutesFromElements(ListRouters))

export default router

import { Fragment, Suspense, lazy } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { v4 as uuid } from 'uuid'
// Components
const Default = lazy(() => import('@layouts/Default'))
const Home = lazy(() => import('@pages/Home'))
const Login = lazy(() => import('@pages/Login'))
const Profile = lazy(() => import('@pages/Profile'))
const PageNotFound = lazy(() => import('@pages/PageNotFound'))

// import Home from '@pages/Home'
// import Login from '@pages/Login'
// import Default from '../layouts/Default'
// import PageNotFound from '@pages/PageNotFound/PageNotFound'
// import Profile from '@pages/Profile'

// ENUM
import { ROUTER_ENUM } from './Router.enum'
import DashBoard from '@pages/Dashboard'

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
    errorElement: <PageNotFound />,
    children: [
      {
        id: uuid(),
        path: ROUTER_ENUM.DEFAULT,
        element: <Home />,
        loader: () => {},
        errorElement: <PageNotFound />,
      },
    ],
  },
  {
    id: uuid(),
    path: ROUTER_ENUM.PROFILE,
    element: <Default />,
    loader: () => {},
    errorElement: <PageNotFound />,
    children: [
      {
        id: uuid(),
        path: ROUTER_ENUM.DEFAULT,
        element: <Profile />,
        loader: () => {},
        errorElement: <PageNotFound />,
      },
    ],
  },
  {
    id: uuid(),
    path: ROUTER_ENUM.LOGIN,
    loader: () => {},
    errorElement: <PageNotFound />,
    children: [
      {
        id: uuid(),
        path: ROUTER_ENUM.DEFAULT,
        element: <Login />,
        loader: () => {},
        errorElement: <PageNotFound />,
      },
    ],
  },
  {
    id: uuid(),
    path: ROUTER_ENUM.DASHBOARD,
    loader: () => {},
    element: <Default />,
    errorElement: <PageNotFound />,
    children: [
      {
        id: uuid(),
        path: ROUTER_ENUM.DEFAULT,
        element: <DashBoard />,
        loader: () => {},
        errorElement: <PageNotFound />,
      },
    ],
  },
  {
    id: uuid(),
    path: ROUTER_ENUM.NOT_FOUND,
    loader: () => {},
    element: <PageNotFound />,
    children: [],
  },
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

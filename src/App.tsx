import { Fragment, Suspense } from 'react'
import router from './routers'
import { RouterProvider } from 'react-router-dom'
import Toast from '@components/Toast'
import 'react-toastify/dist/ReactToastify.css'
import UseQueryProvider from './providers/UseQuery'
import { Spin } from 'antd'

function App() {
  return (
    <Fragment>
      <Suspense fallback={<Spin size='large' />}>
        <UseQueryProvider>
          <RouterProvider router={router} />
          <Toast />
        </UseQueryProvider>
      </Suspense>
    </Fragment>
  )
}

export default App

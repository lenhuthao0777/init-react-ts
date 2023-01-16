import { Fragment, Suspense } from 'react'
import router from './routers'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <Fragment>
      <Suspense fallback={<div>Loading......</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </Fragment>
  )
}

export default App

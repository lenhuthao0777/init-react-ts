import { Fragment, Suspense, lazy } from 'react'
import router from './routers'
import { RouterProvider, BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/Post'
// const Home = lazy(() => import('@src/pages/Home'))
// const Home = lazy(() => import('@src/pages/Home'))

function App() {
  return (
    <Fragment>
      <Suspense fallback={<div>Loading......</div>}>
        <BrowserRouter>
          <Routes>
            <Route path='/home' index element={<Home />} />
            <Route path='/post' index element={<Post />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Fragment>
  )
}

export default App

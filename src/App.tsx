import { Fragment, Suspense } from 'react';
import router from './routers';
import { RouterProvider } from 'react-router-dom';
import Toast from '@components/Toast';
import 'react-toastify/dist/ReactToastify.css';
import UseQueryProvider from './contexts/use-query';

function App() {
  return (
    <Fragment>
      <Suspense fallback={<div>Loading......</div>}>
        <UseQueryProvider>
          <RouterProvider router={router} />
          <Toast />
        </UseQueryProvider>
      </Suspense>
    </Fragment>
  );
}

export default App;

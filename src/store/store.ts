import { configureStore } from '@reduxjs/toolkit'

import loadingSlice from './features/Loading'
import homeSlice from './features/Home'
import auth from './features/Auth'
import { api } from './api'

export const store = configureStore({
  reducer: {
    auth,
    loading: loadingSlice,
    home: homeSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([api.middleware]),
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
import { configureStore } from '@reduxjs/toolkit'

import loadingSlice from './../features/Loading'
import home from '../features/Home'

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    home
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

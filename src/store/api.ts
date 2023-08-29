import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { logout } from './features/Auth'

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL_LOCAL,
  prepareHeaders: (headers, { getState }) => {
    const session: any = getState()

    if (session?.auth.user) {
      headers.set('authorization', `Bearer ${session?.auth?.user?.token}`)
    }
    return headers
  }
})

const baseQueryWithAuth = async (args: any, api: any, extraOptions: any) => {
  const result = await baseQuery(args, api, extraOptions)

  if (result?.error?.status === 403) {
    api.dispatch(logout())
  }

  return result
}

export const api = createApi({
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({})
})

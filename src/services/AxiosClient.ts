import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

import { UserInfo } from '@src/types/global.type'
import { getCookie, eraseCookie } from '@src/libs/utils'
import { AXIOS_CONFIG } from '../enums/global.enum'
// import { showLoader } from '../features/Loading'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL_LOCAL,
  headers: { 'X-Custom-Header': 'foobar' },
})

axiosClient.interceptors.request.use(
  (request: any) => {
    const userInfo: UserInfo = getCookie(AXIOS_CONFIG.TOKEN) || null

    const partUserInfo: UserInfo = userInfo ? JSON.parse(userInfo as any) : {}

    if (partUserInfo.token)
      request.headers.Authorization = `Bearer ${partUserInfo.token}`

    return request
  },
  (err) => {
    return { status: err.request.status, request: err.request.data.errors }
  }
)

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  async (error) => {
    if (error.response.status === 401) {
      // handle logout: clear cookies, move to login page
      await eraseCookie('userInfo')

      const url: string = window.location.origin

      const backToLogin: any = () => {
        window.location.href = `${url}/login`
      }

      await backToLogin()
    }
    if (error.response.status === 500) {
      // handle notification for user server error
    }
    return Promise.reject(error)
  }
)

const apiService = {
  get: <T>(url: string, obj?: object) => axiosClient.get<T>(url, obj),
  post: <T>(url: string, obj: object, config?: AxiosRequestConfig) =>
    axiosClient.post<T>(url, obj, config),
  patch: <T>(url: string, obj: object) => axiosClient.patch<T>(url, obj),
  put: <T>(url: string, obj: object) => axiosClient.put<T>(url, obj),
  delete: <T>(url: string, obj?: object) => axiosClient.delete<T>(url, obj),
}

export default apiService

import { getCookie, eraseCookie, showToast } from '@src/hooks'
import { UserInfo } from '@src/types/global.type'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { AXIOS_CONFIG } from '../enums/global.enum'
import { showLoader } from '../features/Loading'

const apiService = (dispatch?: any) => {
  const axiosClient = axios.create({
    baseURL: 'http://localhost:3000',
    headers: { 'X-Custom-Header': 'foobar' },
  })

  axiosClient.interceptors.request.use(
    (request: any) => {
      dispatch && dispatch(showLoader(true))

      const userInfo: UserInfo = getCookie(AXIOS_CONFIG.TOKEN) || null

      const partUserInfo: UserInfo = userInfo ? JSON.parse(userInfo as any) : {}

      if (partUserInfo.token)
        request.headers.Authorization = `Bearer ${partUserInfo.token}`

      return request
    },
    (err) => {
      dispatch && dispatch(showLoader(false))

      return { status: err.request.status, request: err.request.data.errors }
    }
  )

  axiosClient.interceptors.response.use(
    (response: AxiosResponse) => {
      dispatch && dispatch(showLoader(false))

      return response
    },
    async (error) => {
      dispatch && dispatch(showLoader(false))

      if (error.response.status === 401) {
        // handle logout: clear cookies, move to login page
        await eraseCookie('userInfo')

        const url: string = window.location.origin

        const backToLogin: any = () => {
          window.location.href = `${url}/login`
        }

        await backToLogin()

        await showToast('error', 'Unauthorized!')
      }
      if (error.response.status === 500) {
        // handle notification for user server error
        await showToast('error', 'Server error!')
      }
      return Promise.reject(error)
    }
  )

  const client = {
    get: <T>(url: string, obj?: object) => axiosClient.get<T>(url, obj),
    post: <T>(url: string, obj: object, config?: AxiosRequestConfig) =>
      axiosClient.post<T>(url, obj, config),
    patch: <T>(url: string, obj: object) => axiosClient.patch<T>(url, obj),
    put: <T>(url: string, obj: object) => axiosClient.put<T>(url, obj),
    delete: <T>(url: string, obj?: object) => axiosClient.delete<T>(url, obj),
  }

  return client
}

export default apiService

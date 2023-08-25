import apiService from '@/src/lib/AxiosClient'
import CommonApi from '.'

class Auth extends CommonApi {
  static baseUrl = 'auth'

  static login(body?: any): Promise<any> {
    return apiService.post(`${this.baseUrl}/login`, body).then((res) => res.data)
  }

  static me(email: string) {
    return apiService.get(`${this.baseUrl}/me/${email}`).then((res: any) => res.data)
  }
}

export default Auth

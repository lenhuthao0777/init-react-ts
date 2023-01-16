import apiService from '@src/services/AxiosClient'
import CommonApi from '.'

class Auth extends CommonApi {
  static baseUrl = 'user'

  static login(dispatch?: () => void, body?: any): Promise<any> {
    return apiService(dispatch)
      .post(`${this.baseUrl}/login`, body)
      .then((res) => res.data)
  }
}

export default Auth

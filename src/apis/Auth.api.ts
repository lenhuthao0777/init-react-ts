import apiService from '@src/services/AxiosClient'
import CommonApi from '.'

const baseUrl = 'user'

class Auth extends CommonApi {
  static login(dispatch?: () => void, body?: any) {
    return apiService(dispatch)
      .post(`${baseUrl}/login`, body)
      .then((res) => res.data)
  }
}

export default Auth

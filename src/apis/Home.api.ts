import apiService from '@src/services/AxiosClient'
import CommonApi from '.'

class HomeService extends CommonApi {
  static baseUrl = 'race'
}

export default HomeService

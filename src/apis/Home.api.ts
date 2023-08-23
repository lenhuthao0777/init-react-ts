import apiService from '@/src/lib/AxiosClient'
import CommonApi from '.'

class HomeService extends CommonApi {
  static baseUrl = 'race'
}

export default HomeService

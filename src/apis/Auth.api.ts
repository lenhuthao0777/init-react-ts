import apiService from '@src/services/AxiosClient';
import Base from './index';

class Auth extends Base {
  baseUrl = 'auth';

  login(body?: any): Promise<any> {
    return this.post(`${this.baseUrl}/login`, body).then((res) => res.data);
  }
}

export default Auth;

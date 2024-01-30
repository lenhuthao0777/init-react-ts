import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

class Client {
  url;
  http;
  timeout = 16000;

  constructor() {
    this.url = import.meta.env.VITE_API_URL_LOCAL || '';
    this.http = axios.create({
      baseURL: this.url,
      timeout: this.timeout,
    });

    this.http.interceptors.request.use(
      (request: any) => {
        // handle token
        request.headers.Authorization = `Bearer`;
        console.info(`[request] [${JSON.stringify(request)}]`);
        return request;
      },
      (error): Promise<AxiosError> => {
        console.error(`[request error] [${JSON.stringify(error)}]`);
        return Promise.reject(error);
      }
    );

    this.http.interceptors.response.use(
      (response: AxiosResponse) => {
        console.info(`[response] [${JSON.stringify(response)}]`);
        return response;
      },
      (error: AxiosError): Promise<AxiosError> => {
        console.error(`[response error] [${JSON.stringify(error)}]`);
        switch (error?.response?.status) {
          case 400:
            // Handle error
            break;
          case 401:
            // Handle unauthorized
            console.log('unauthorized');
            break;
          default:
            break;
        }
        return Promise.reject(error);
      }
    );
  }

  get<T>(url: string, obj?: object) {
    return this.http.get<T>(url, obj);
  }

  post<T>(url: string, obj: object, config?: AxiosRequestConfig) {
    return this.http.post<T>(url, obj, config);
  }

  patch<T>(url: string, obj: object) {
    return this.http.patch<T>(url, obj);
  }

  put<T>(url: string, obj: object) {
    return this.http.put<T>(url, obj);
  }

  delete<T>(url: string, obj?: object) {
    return this.http.delete<T>(url, obj);
  }
}

export default Client;

import {apiService} from '@/src/lib/AxiosClient'
import { TApiResponse } from '@src/types/global.type'

export default class CommonApi {
  static baseUrl: string = ''

  static async list(query?: any): Promise<any> {
    return apiService.get(`${this.baseUrl}`, { params: query }).then((res) => res.data)
  }

  static async detail(id: number | string): Promise<any> {
    return apiService.get(`${this.baseUrl}/${id}`)
  }

  static async create(body: any): Promise<any> {
    return apiService.post(`${this.baseUrl}`, body)
  }

  static async edit(body: any): Promise<any> {
    return apiService.put(`${this.baseUrl}`, body)
  }

  static async delete(id: string): Promise<any> {
    return apiService.delete(`${this.baseUrl}/${id}`)
  }
}

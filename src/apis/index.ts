import apiService from '@src/services/AxiosClient'

export default class CommonApi {
  baseUrl: string = ''

  public async list(query: any) {
    return apiService().get(`${this.baseUrl}`, { query })
  }

  public async detail(id: number | string) {
    return apiService().get(`${this.baseUrl}/${id}`)
  }

  public async create(body: any) {
    return apiService().post(`${this.baseUrl}`, body)
  }

  public async edit(body: any) {
    return apiService().put(`${this.baseUrl}`, body)
  }
}

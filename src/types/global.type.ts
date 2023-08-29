export type UserInfo = {
  email: string
  password: string
  role?: number | number[]
  token?: string
}

export type TableBaseHeaderType = {
  title: string
  rowSpan: number | string | null
  colSPan: number | string | null
  width: string | null
  height: string | null
  border: string | null
  class: string | undefined
}

export type TableBaseBodyType = {}

export type UserType = {
  id: number | string
  name: string
  email: string
  create_at: string
  update_at: string
}

export type TApiResponse<T> = {
  message: string
  status: number | string
  data: T
}

export declare namespace API {
  export type BaseResponse = {
    httpStatus: 200
    created_at: string
  }
  export type TestResponse = { value: string }
}

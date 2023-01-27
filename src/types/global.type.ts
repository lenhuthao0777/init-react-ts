import { jsx } from '@emotion/react'

export type router = {
  path: string
  element: () => jsx.JSX.Element
  loader: () => void
  errorElement: () => jsx.JSX.Element
  children: children[]
}

export type children = {
  path: string
  element: () => jsx.JSX.Element
  loader: () => void
  errorElement: () => jsx.JSX.Element
}

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

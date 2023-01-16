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
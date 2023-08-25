import { toast, ToastPosition } from 'react-toastify'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function setCookie(name: string, value: any, days?: any): any {
  let expires = ''
  if (days) {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = '; expires=' + date.toUTCString()
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/'
}

export function getCookie(name: string): any {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

export function eraseCookie(name: string) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}

export const showToast = (type: string, message: string, position?: ToastPosition) => {
  switch (type) {
    case 'error':
      return toast.error(message, {
        position: position ? position : 'top-right'
      })

    case 'success':
      return toast.success(message, {
        position: position ? position : 'top-right'
      })

    default:
      break
  }
}

export const removeEmpty = (params: any) => {
  for (const key of Object.keys(params)) {
    if (params[key] === '' || params[key] === null || params[key] === undefined) {
      delete params[key]
    }
  }
  return params
}
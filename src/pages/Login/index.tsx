import { Button, Input } from 'antd'
import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setCookie } from '../../hooks'

type UserLogin = {
  email: string
  password: string
}
const Login: React.FC<any> = () => {
  const [userInfo, setUserInfo] = useState<UserLogin>({
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const handleLogin = () => {
    const userInfoLogin: UserLogin = {
      email: 'haole',
      password: '123',
    }
    if (userInfo && userInfo.email === userInfoLogin.email && userInfo.password === userInfoLogin.password) {
      setCookie(
        'userInfo',
        JSON.stringify({
          ...userInfo,
          role: 1,
        })
      )
      return navigate('/')
    } else {
      return false
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target: HTMLInputElement = e.target
    setUserInfo({
      ...userInfo,
      [`${target.name}`]: target.value,
    })
  }

  return (
    <Fragment>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
          </div>
          <div className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  onChange={onChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={handleLogin}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Login

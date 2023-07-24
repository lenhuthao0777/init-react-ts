import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { UserInfo } from '../types/global.type'
import { eraseCookie, getCookie, setCookie } from '../utils'

const initialState: any | null = {
  user: {
    email: '',
    password: '',
  },
  role: [],
}

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserInfo>) => {
      state.user = {
        ...action.payload,
      }
    },

    logout: (state: UserInfo | null) => {
      eraseCookie('userInfo')
      state = null
    },
  },
})

export const { login, logout } = userInfoSlice.actions

export const selectUserInfo = (state: RootState) => state.userInformation

export default userInfoSlice.reducer

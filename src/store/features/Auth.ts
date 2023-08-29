import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserInfo } from '@src/types/global.type'
import { eraseCookie, getCookie, setCookie } from '@src/lib/Utils'

const initialState: any | null = {
  user: null
}

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredential: (state, action: PayloadAction<UserInfo>) => {
      console.log(action.payload)

      state.user = {
        ...action.payload
      }

      setCookie(
        'userInfo',
        JSON.stringify({
          ...action.payload
        })
      )
    },

    logout: (state) => {
      state.user = null
      eraseCookie('userInfo')
    }
  }
})

export const { setCredential, logout } = auth.actions

export default auth.reducer

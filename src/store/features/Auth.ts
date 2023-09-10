import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserInfo } from '@src/types/global.type'
import { eraseCookie, setCookie } from '@src/lib/Utils'

type AuthType = {
  user: any | null
}

const initialState: AuthType = {
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

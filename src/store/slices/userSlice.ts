import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'

// user state structure
interface UserState {
  user: {
    id: string
    name: string
    email: string
    isAuthenticated: boolean
  }
}

// Initial state with dummy values
const initialState: UserState = {
  user: {
    id: '',
    name: '',
    email: '',
    isAuthenticated: false,
  },
}

// payload type for setUser action
type UserPayload = {
  id: string
  name: string
  email: string
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to set user data (login)
    setUser: (state, action: PayloadAction<UserPayload>) => {
      state.user = {
        ...action.payload,
        isAuthenticated: true,
      }
    },
    // Action to clear user data (logout)
    clearUser: (state) => {
      state.user = {
        id: '',
        name: '',
        email: '',
        isAuthenticated: false,
      }
    },
  },
})

// Export actions
export const { setUser, clearUser } = userSlice.actions

// Export selectors
export const selectUser = (state: RootState) => state.user.user
export const selectIsAuthenticated = (state: RootState) =>
  state.user.user.isAuthenticated

// Export reducer
export default userSlice.reducer

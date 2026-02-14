import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import { apiSlice } from './api/apiSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

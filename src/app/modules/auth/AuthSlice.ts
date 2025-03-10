import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AuthService } from "./service/AuthService"
import { TAuthDTO, TAuthState } from "./types/AuthTypes"
import { RootState } from "../../settings/redux/store"
import { AuthFormProps, MockAuthForm } from "./form/AuthForm"
import { KeyLocalStorage } from "../../settings/types/KeyLocalStorage"
import { TokenService } from "./service/TokenService"
import toast from "react-hot-toast"

const authService = new AuthService()
const tokenService = new TokenService()

const initialState: TAuthState = {
  authForm: MockAuthForm,
  isAuthLoad: "completed",
  authUser: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetForm: (state) => {
      state.authForm = MockAuthForm
    },

    initAuth: (state) => {
      const authUser = tokenService.getLocalStorageToken()

      if (authUser) {
        tokenService.setBearerToken(authUser.token!)

        state.authUser = authUser
      }
    },

    authChangeForm: (state, action: PayloadAction<AuthFormProps>) => {
      state.authForm = {
        ...state.authForm,
        [action.payload.key]: action.payload.value,
      }
    },

    logout: (state) => {
      state.authUser = null

      tokenService.logout()
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isAuthLoad = "load"
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthLoad = "completed"
        state.authUser = action.payload

        tokenService.setBearerToken(action.payload.token!)
        localStorage.setItem(KeyLocalStorage.token, action.payload.token!)
      })
      .addCase(login.rejected, (state, action) => {
        state.isAuthLoad = "failed"
      })
  },
})

// ASYNC REDUCERS

export const login = createAsyncThunk("auth/login", async (dto: TAuthDTO) => {
  console.log("dto", dto)
  const authUser = await authService.login(dto)

  return authUser
})

// ACTIONS

export const { authChangeForm, initAuth, logout, resetForm } = authSlice.actions

export const selectToken = (state: RootState) => state.authSlice.authUser?.token
export const selectAuthValues = (state: RootState) => state.authSlice

// Export

export default authSlice.reducer

import { Nullable } from "../../../settings/types/BaseTypes"
import { TAuthtForm } from "../form/AuthForm"
import { AuthUser } from "../models/AuthUser"

export type TAuthState = {
  authForm: TAuthtForm
  isAuthLoad: "completed" | "load" | "failed"
  authUser: Nullable<AuthUser>
}

export type TAuthDTO = {
  email: string
  password: string
}

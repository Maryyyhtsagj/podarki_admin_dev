export enum AuthFormKeys {
  email = "email",
  password = "password",
}

export type TAuthtForm = {
  [AuthFormKeys.email]: string
  [AuthFormKeys.password]: string
}

export type AuthFormProps = {
  key: AuthFormKeys
  value: string
}

export const MockAuthForm: TAuthtForm = {
  email: "",
  password: "",
}

export class AuthFormValidation {
  static isValidForm = (form: TAuthtForm) => {
    return this.isEmailValid(form.email) && form.password.length > 3
  }

  static isEmailValid = (email: string) => {
    const EMAIL_REGEXP =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu

    return EMAIL_REGEXP.test(email)
  }
}

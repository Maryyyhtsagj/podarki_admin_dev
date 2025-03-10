export enum ClaimDenyFormKeys {
  reason = "reason",
}

export type TClaimDenytForm = {
  [ClaimDenyFormKeys.reason]: string
}

export type ClaimDenyFormProps = {
  key: ClaimDenyFormKeys
  value: string
}

export const MockClaimDenyForm: TClaimDenytForm = {
  reason: "",
}

export class ClaimDenyFormValidation {
  static isValidForm = (form: TClaimDenytForm) => {
    return form.reason.length > 3
  }
}

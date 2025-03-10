import AbstractModel from "../../../settings/abstrcations/models/AbstractModel"
import { Nullable } from "../../../settings/types/BaseTypes"

export class AuthUser extends AbstractModel {
  token: Nullable<string> = null

  constructor(props: any) {
    super()
    this.load(props)
  }
}

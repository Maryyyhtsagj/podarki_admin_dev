import AbstractModel from "../../../settings/abstrcations/models/AbstractModel"
import { Nullable } from "../../../settings/types/BaseTypes"

export class Seller extends AbstractModel {
  _id: string = ""
  name: string = ""
  email: string = ""
  password: string = ""
  legal_name: string = ""
  phone_number: string = ""
  bill_number: string = ""
  status: string = ""
  message_from_admin: Nullable<string> = null
  subscription_status: Nullable<string> = null
  subscription_valid_until: Nullable<string> = null
  active_store: Nullable<string> = null
  inn: string = ""
  ip: string = ""
  ogrn: string = ""
  city: string = ""
  address: string = ""
  is_banned: boolean = false
  chatID: string = ""
  __v: number = 0

  constructor(props: any) {
    super()
    this.load(props)
  }
}

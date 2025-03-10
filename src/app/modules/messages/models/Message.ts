import AbstractModel from "../../../settings/abstrcations/models/AbstractModel"
import { Nullable } from "../../../settings/types/BaseTypes"
import { MessageRoleType } from "../types/MessagesTypes"

export class Message extends AbstractModel {
  _id: string = ""
  name: string = ""
  text: string = ""
  date: string = ""
  time: string = ""
  role: Nullable<MessageRoleType> = null

  constructor(props: any) {
    super()
    this.load(props)
  }
}

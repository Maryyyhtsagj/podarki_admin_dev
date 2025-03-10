import AbstractModel from "../../../settings/abstrcations/models/AbstractModel"

export class Chats extends AbstractModel {
  name: string = ""
  chatID: string = ""
  city: string = ""
  phone_number: string = ""
  newMessCount: number = 0
  lastMessage: string = ""
  _id: string = ""
  user_id: string = ""

  constructor(props: any) {
    super()
    this.load(props)
  }
}

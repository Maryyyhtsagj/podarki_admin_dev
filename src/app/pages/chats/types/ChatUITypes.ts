import { Message } from "../../../modules/messages/models/Message"

export enum ChatTabMenuTypes {
  all = "all",
  noRead = "noRead",
  notification = "notification",
}

export type TChatTabMenu = {
  [ChatTabMenuTypes.all]: string
  [ChatTabMenuTypes.noRead]: string
  [ChatTabMenuTypes.notification]: string
}

export interface FormattedMessagesModel {
  date: string
  messages: Message[]
}

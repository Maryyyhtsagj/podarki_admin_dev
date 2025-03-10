import { Message } from "../modules/messages/models/Message"
import { FormattedMessagesModel } from "../pages/chats/types/ChatUITypes"

export class MessageHelper {
  static getFormattedMessages = (list: Message[]): FormattedMessagesModel[] => {
    const formattedMessages: FormattedMessagesModel[] = []

    list.forEach((message) => {
      const existingGroup = formattedMessages.find(
        (group) => group.date === message.date,
      )

      if (existingGroup) {
        existingGroup.messages.push(message)
      } else {
        formattedMessages.push({ date: message.date, messages: [message] })
      }
    })

    return formattedMessages
  }
}

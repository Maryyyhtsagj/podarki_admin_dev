import { Chats } from "../models/Chats"
import { Message } from "../models/Message"
import { Notification } from "../models/Notifications"

export interface MessagesStateModel {
  chatList: Chats[]
  isChatsLoad: "completed" | "load" | "failed"
  isMessagesLoad: "completed" | "load" | "failed"
  chatListPending: Chats[]
  messagesList: Message[]
  notificationList: Notification[]
  chatId?: string | null
  sellerId?: string
}

export type PostMessageType = {
  title: "Test Notification Title"
  body: "Test Notification Body"
}

export type MessageRoleType = "admin" | "seller"

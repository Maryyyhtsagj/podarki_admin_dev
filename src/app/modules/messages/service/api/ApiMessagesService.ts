import AbstractApiRepository from "../../../../settings/abstrcations/repositories/AbstractApiRepository"
import { PostMessageType } from "../../types/MessagesTypes"

export class ApiMessagesService extends AbstractApiRepository {
  getChats = async () => {
    return this.apiClient.get({
      url: "api/chat/im/admin",
    })
  }

  getNotifications = async () => {
    return this.apiClient.get({
      url: "api/users/admin/notifications",
    })
  }
  deleteNotification = async (id: string) => {
    return this.apiClient.delete({
      url: `api/users/admin/notifications?notif_id=${id}`,
    })
  }
  getChatId = async (id: string) => {
    return this.apiClient.get({
      url: `api/chat/is-created/admin?seller_id=${id}`,
      data: id,
    })
  }

  getMessages = async (chatID: string) => {
    return this.apiClient.get({
      url: `api/messages?chatID=${chatID}`,
    })
  }

  postMessageSellers = async (dto: PostMessageType) => {
    return this.apiClient.post({
      url: `api/users/admin/message/sellers`,
      data: dto,
    })
  }
  postMessageBuyers = async (dto: PostMessageType) => {
    return this.apiClient.post({
      url: `api/users/admin/message/buyers`,
      data: dto,
    })
  }
}

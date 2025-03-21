// @ts-nocheck

import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { MessagesStateModel, PostMessageType } from "./types/MessagesTypes"
import { MessagesService } from "./service/MessagesService"
import { RootState } from "../../settings/redux/store"
import { act } from "react-dom/test-utils"

const messagesService = new MessagesService()

const initialState: MessagesStateModel = {
  chatList: [],
  isChatsLoad: "completed",
  isMessagesLoad: "completed",
  chatListPending: [],
  notificationList: [],
  messagesList: [],
  chatId: "",
  sellerId: "",
}

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: (bulder) => {
    bulder
      // GET Chats

      .addCase(getChats.pending, (state) => {
        state.isChatsLoad = "load"
      })
      .addCase(getChats.fulfilled, (state, action) => {
        if (action.payload) {
          state.chatList = action.payload
          state.chatListPending = action.payload.filter(
            (chat) => chat.newMessCount > 0,
          )
        }

        state.isChatsLoad = "completed"
      })
      .addCase(getChats.rejected, (state) => {
        state.isChatsLoad = "completed"
      })

      // GET Messages

      .addCase(getMessages.pending, (state) => {
        state.isMessagesLoad = "load"
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        if (action.payload) {
          state.messagesList = action.payload
        }

        state.isMessagesLoad = "completed"
      })
      .addCase(getMessages.rejected, (state) => {
        state.isMessagesLoad = "failed"
      })
      .addCase(postMessageSellers.pending, (state) => {
        state.isMessagesLoad = "load"
      })
      .addCase(postMessageSellers.fulfilled, (state) => {
        state.isMessagesLoad = "completed"
      })
      .addCase(postMessageSellers.rejected, (state) => {
        state.isMessagesLoad = "failed"
      })
      .addCase(postMessageBuyers.pending, (state) => {
        state.isMessagesLoad = "load"
      })
      .addCase(postMessageBuyers.fulfilled, (state) => {
        state.isMessagesLoad = "completed"
      })
      .addCase(postMessageBuyers.rejected, (state) => {
        state.isMessagesLoad = "failed"
      })
      .addCase(getChatId.fulfilled, (state, action) => {
        state.chatId = action.payload
        state.isMessagesLoad = "completed"
      })
      .addCase(getChatId.rejected, (state, action) => {
        state.chatId = action.payload
        state.isMessagesLoad = "failed"
      })

      .addCase(getNotifications.fulfilled, (state, action) => {
        state.notificationList = action.payload
      })
      .addCase(getNotifications.rejected, (state) => {
        state.isMessagesLoad = "failed"
      })
  },
})

export const getNotifications = createAsyncThunk(
  "messages/notifications",
  async () => {
    const notifications = await messagesService.getNotifications()

    return notifications
  },
)
export const deleteNotification = createAsyncThunk(
  "messages/notification/delete",
  async (id: string) => {
    const notifications = await messagesService.deleteNotification(id)

    return notifications
  },
)
export const getChats = createAsyncThunk("messages/chats", async () => {
  const chats = await messagesService.getChats()

  return chats
})

export const getChatId = createAsyncThunk(
  "messages/chatId",
  async (id: string) => {
    const chatId = await messagesService.getChatId(id)

    return chatId
  },
)

export const getMessages = createAsyncThunk(
  "messages/messages",
  async (chatID: string) => {
    const messages = await messagesService.getMessages(chatID)

    return messages
  },
)

export const postMessageSellers = createAsyncThunk(
  "message/postMessageSellers",
  async (dto: PostMessageType) => {
    const messages = await messagesService.postMessageSellers(dto)

    return messages
  },
)
export const postMessageBuyers = createAsyncThunk(
  "message/postMessageBuyers",
  async (dto: PostMessageType) => {
    const messages = await messagesService.postMessageBuyers(dto)

    return messages
  },
)

export const selectMessagesValues = (state: RootState) => state.messagesSlice

export const selectNotificationValues = (state: RootState) =>
  state.messagesSlice

export default messagesSlice.reducer

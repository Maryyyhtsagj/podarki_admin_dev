import React from "react"
import { TabMenu } from "../../../components/tabMenu/TabMenu"
import { ChatTabMenuTypes } from "../types/ChatUITypes"
import { MockChatTabMenu } from "../mock/MockChatsTabMenu"
import { useAppSelector } from "../../../settings/redux/hooks"
import { selectMessagesValues } from "../../../modules/messages/MessagesSlice"

type ChatTabMenuProps = {
  activeTab: ChatTabMenuTypes
  onChangeTab: (key: ChatTabMenuTypes) => void
}

export const ChatsTabMenu = (props: ChatTabMenuProps) => {
  const { chatList } = useAppSelector(selectMessagesValues)

  let chatListArr = chatList.filter(
    (messageCount) => messageCount.newMessCount > 0,
  )

  return (
    <TabMenu
      tab={MockChatTabMenu}
      onChangeTab={(key) => props.onChangeTab(key as ChatTabMenuTypes)}
      isNewKey={ChatTabMenuTypes.noRead}
      isNewLength={chatListArr.length}
      activeTab={props.activeTab}
    />
  )
}

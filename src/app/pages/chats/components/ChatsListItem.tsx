// @ts-nocheck

import { Chats } from "../../../modules/messages/models/Chats"
import { ListItemUI } from "../../../components/ListItemUI"
import { MainContainer } from "../../../template/containers/MainContainer"
import { RowContainer } from "../../../template/containers/RowContainer"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { LineTextVertical } from "../../finances/ui/LineTextVertical"
import { MaskHelper } from "../../../helpers/MaskHelper"
import { ChatNewMessCountUI } from "../ui/ChatNewMessCountUI"
import { ColorsUI } from "../../../template/styles/ColorUI"
import { useNavigate } from "react-router-dom"
import { PathApp } from "../../../routes/path/PathApp"
import { useAppDispatch } from "../../../settings/redux/hooks"
import { getCurrentSeller } from "../../../modules/sellers/SellersSlice"
import {
  getChatId,
  setLocaleSellerId,
} from "../../../modules/messages/MessagesSlice"

type ChatsListItemProps = {
  chat: Chats
}

export const ChatsListItem = (props: ChatsListItemProps) => {
  const navigate = useNavigate()
  let sellerId = props.chat.user_id

  let dispatch = useAppDispatch()

  const handleGoToChat = () => {
    dispatch(getCurrentSeller(sellerId))
    dispatch(getChatId(sellerId)).then((res) => {
      let chatID = res.payload.chatID
      if (chatID) {
        navigate(`${PathApp.chats.path}/${chatID}`)
      }
    })
  }

  return (
    <ListItemUI $isCursor onClick={() => handleGoToChat()}>
      <MainContainer>
        <RowContainer $mb={10}>
          <TextUI ag={Ag["600_16"]} text={props.chat.name} />
          <LineTextVertical />
          <TextUI ag={Ag["400_16"]} text={`ID: ${props.chat.user_id}`} />
          <LineTextVertical />
          <TextUI ag={Ag["400_16"]} text={`г.${props.chat.city}`} />
          <LineTextVertical />
          <TextUI
            ag={Ag["600_16"]}
            text={MaskHelper.formatPhoneNumber(props.chat.phone_number)}
          />
        </RowContainer>

        <TextUI ag={Ag["400_16"]} text={props.chat.lastMessage} />
      </MainContainer>

      {props.chat.newMessCount ? (
        <ChatNewMessCountUI>
          <TextUI
            color={ColorsUI.white}
            ag={Ag["400_16"]}
            text={props.chat.newMessCount.toString()}
          />
        </ChatNewMessCountUI>
      ) : null}
    </ListItemUI>
  )
}

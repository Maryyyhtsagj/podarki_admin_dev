import { useEffect } from "react"
import { NotifCard } from "../../../components/notifCard/NotifCard"
import { useAppDispatch, useAppSelector } from "../../../settings/redux/hooks"
import { ChatNotifCard } from "./ChatNotifCard"
import {
  getNotifications,
  selectMessagesValues,
  selectNotificationValues,
} from "../../../modules/messages/MessagesSlice"

export const ChatNotifContent = () => {
  let { notificationList } = useAppSelector(selectNotificationValues)

  let dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getNotifications())
  }, [])

  return (
    <>
      {notificationList.map((item, index) => (
        <NotifCard
          key={index}
          containerProps={{
            $mb: 20,
          }}
          headerColor={item.role === "buyer" ? "pink" : "tiffany"}
          content={<ChatNotifCard data={item} />}
        />
      ))}
    </>
  )
}

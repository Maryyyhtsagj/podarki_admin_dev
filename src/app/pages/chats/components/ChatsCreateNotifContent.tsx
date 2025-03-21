// @ts-nocheck

import React, { useState } from "react"
import { InputUnderline } from "../../../components/InputUnderline"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { ButtonUI } from "../../../template/ui/ButtonUI"
import { ColorsUI } from "../../../template/styles/ColorUI"
import { CommentUI } from "../../../components/CommentUI"
import { useAppDispatch } from "../../../settings/redux/hooks"
import {
  getNotifications,
  postMessageBuyers,
  postMessageSellers,
} from "../../../modules/messages/MessagesSlice"

export const ChatsCreateNotifContent = () => {
  let dispatch = useAppDispatch()
  const [notifTitle, setNotifTitle] = useState("")
  const [notifDesc, setNotifDesc] = useState("")

  function handlePostMessageSellers() {
    dispatch(
      postMessageSellers({
        title: notifTitle,
        body: notifDesc,
      }),
    )
    setNotifTitle("")
    setNotifDesc("")
  }
  function handlePostMessageByuers() {
    console.log("Sending notification payload:", {
      title: notifTitle,
      body: notifDesc,
    });

    dispatch(
      postMessageBuyers({
        title: notifTitle,
        body: notifDesc,
      }),
    )
      .then(() => {
        dispatch(getNotifications());
      })
      .catch((error) => {
        console.error("Error sending buyer notification:", error);
      });

    setNotifTitle("");
    setNotifDesc("");
  }


  return (
    <>
      <TextUI mb={15} ag={Ag["500_14"]} text={"Заголовок"} />
      <InputUnderline
        $mb={40}
        value={notifTitle}
        $pl={0}
        placeholder={"Напишите заголовок уведомления"}
        onChange={(e) => setNotifTitle(e.target.value)}
      />

      <TextUI mb={5} ag={Ag["500_14"]} text={"Текст уведомления"} />
      <CommentUI
        $mb={40}
        value={notifDesc}
        onChange={(e) => setNotifDesc(e.target.value)}
        placeholder="Напишите текст уведомления"
      />

      <ButtonUI onClick={() => handlePostMessageSellers()} $mb={10}>
        <TextUI
          color={ColorsUI.white}
          ag={Ag["600_16"]}
          text={"Отправить магазинам"}
        />
      </ButtonUI>
      <ButtonUI onClick={() => handlePostMessageByuers()} $backColor={"pink"}>
        <TextUI
          color={ColorsUI.white}
          ag={Ag["600_16"]}
          text={"Отправить покупателям"}
        />
      </ButtonUI>
    </>
  )
}

import React, { ReactNode } from "react"
import { MainContainer } from "../../template/containers/MainContainer"
import { HeaderColor, NotifCardHeader } from "./ui/NotifCardHeader"
import { ContainerProps } from "../../settings/types/UITypes"
import { NotifCardContent } from "./ui/NorifCardContent"

type NotifCardProps = {
  headerColor: HeaderColor
  containerProps?: ContainerProps
  content: ReactNode
  isExpired?: boolean
}

export const NotifCard = (props: NotifCardProps) => {
  return (
    <MainContainer {...props.containerProps}>
      <NotifCardHeader $headerColor={props.headerColor} />
      <NotifCardContent $isExpired={props.isExpired}>
        {props.content}
      </NotifCardContent>
    </MainContainer>
  )
}

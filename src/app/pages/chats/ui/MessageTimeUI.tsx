import styled from "styled-components"
import { MessageUIProps } from "./MessageUI"

export const MessageTimeUI = styled.div<MessageUIProps>`
  position: absolute;
  bottom: 8px;
  ${({ $isAuthor }) => ($isAuthor ? "left: 15px;" : " right: 15px;")}
`

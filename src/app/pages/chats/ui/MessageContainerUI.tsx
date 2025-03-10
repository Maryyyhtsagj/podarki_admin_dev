import styled from "styled-components"
import { MainContainer } from "../../../template/containers/MainContainer"
import { MessageUIProps } from "./MessageUI"

export const MessageContainerUI = styled(MainContainer)<MessageUIProps>`
  align-items: ${({ $isAuthor }) => ($isAuthor ? "end" : "start")};
`

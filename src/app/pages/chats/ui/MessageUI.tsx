import styled from "styled-components"
import { MainContainer } from "../../../template/containers/MainContainer"
import { ColorsUI } from "../../../template/styles/ColorUI"

export type MessageUIProps = {
  $isAuthor: boolean
}

export const MessageUI = styled(MainContainer)<MessageUIProps>`
  max-width: 65%;
  min-width: 30%;
  padding: 25px;
  width: fit-content;
  background-color: ${({ $isAuthor }) =>
    $isAuthor ? ColorsUI.transparent : ColorsUI.blue};
  border: 1px solid
    ${({ $isAuthor }) => ($isAuthor ? ColorsUI.text1 : ColorsUI.blue)};

  border-radius: 15px 15px
    ${({ $isAuthor }) => ($isAuthor ? "0 15px" : "15px 0")};
`

import styled from "styled-components"
import { ColorsUI } from "../../../template/styles/ColorUI"

type NotifCardContentProps = {
  $isExpired?: boolean
}

export const NotifCardContent = styled.div<NotifCardContentProps>`
  padding-top: 10px;
  padding-bottom: 20px;
  padding: 10px 20px 20px 20px;

  border: 1px solid ${ColorsUI.text1};
  border-top: none;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  background-color: ${({ $isExpired }) =>
    $isExpired ? ColorsUI.lightRed : ColorsUI.transparent};
`

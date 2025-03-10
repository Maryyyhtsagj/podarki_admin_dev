import styled from "styled-components"
import { MainContainer } from "../../../template/containers/MainContainer"
import { ColorsUI } from "../../../template/styles/ColorUI"

export type HeaderColor = "pink" | "tiffany" | "red"

type NotifCardHeaderProps = {
  $headerColor: HeaderColor
}

export const NotifCardHeader = styled(MainContainer)<NotifCardHeaderProps>`
  height: 13px;
  background-color: ${({ $headerColor }) => getBackColor($headerColor)};
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`
const getBackColor = (color?: HeaderColor) => {
  switch (color) {
    case "pink":
      return ColorsUI.pink
    case "red":
      return ColorsUI.red
    default:
      return ColorsUI.tifany2
  }
}

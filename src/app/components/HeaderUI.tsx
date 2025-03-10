import styled from "styled-components"
import { ColorsUI } from "../template/styles/ColorUI"
import { MainContainer } from "../template/containers/MainContainer"

type HeaderUIProps = {
  $isNoHeight?: boolean
}

export const HeaderUI = styled(MainContainer)<HeaderUIProps>`
  width: 100%;
  height: ${({ $isNoHeight }) => ($isNoHeight ? "fit-content" : "88px")};
  background-color: ${ColorsUI.lightBlue};
`

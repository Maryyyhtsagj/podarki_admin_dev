import styled from "styled-components"
import { ColumnContainerBetween } from "../../../template/containers/ColumnContainer"
import { ColorsUI } from "../../../template/styles/ColorUI"
import { MainContainer } from "../../../template/containers/MainContainer"

export const SideContainer = styled(MainContainer)`
  width: 25%;
  min-width: 200px;
  max-width: 360px;
  height: 100%;
  background-color: ${ColorsUI.lightPink};
`

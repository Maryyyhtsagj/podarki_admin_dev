import styled from "styled-components"
import { MainContainer } from "../../../template/containers/MainContainer"
import { ColorsUI } from "../../../template/styles/ColorUI"

export const DoubleSectionContainer = styled(MainContainer)`
  height: 100%;
  width: 50%;
  border-right: 1px solid ${ColorsUI.lines};
`

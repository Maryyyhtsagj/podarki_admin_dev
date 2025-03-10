import styled from "styled-components"
import { MainContainer } from "../../../template/containers/MainContainer"
import { ColorsUI } from "../../../template/styles/ColorUI"

export const LineTextVertical = styled(MainContainer)`
  background-color: ${ColorsUI.text1};
  margin: 0px 10px;

  width: ${({ $width }) => ($width ? $width : 1.5)}px;

  height: ${({ $heightPX }) => ($heightPX ? $heightPX : 16)}px;
`

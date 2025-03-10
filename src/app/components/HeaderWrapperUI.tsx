import styled from "styled-components"
import { Wrapper } from "../template/containers/Wrapper"
import { ColorsUI } from "../template/styles/ColorUI"

type THeaderWrapperProps = {
  $isNoBorder?: boolean
}

export const HeaderWrapperUI = styled(Wrapper)<THeaderWrapperProps>`
  justify-content: flex-end;
  border-bottom: ${({ $isNoBorder }) => ($isNoBorder ? 0 : 1)}px solid
    ${ColorsUI.lines};
`

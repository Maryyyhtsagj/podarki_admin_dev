import styled from "styled-components"
import { RowContainerBeetwen } from "../template/containers/RowContainer"
import { ColorsUI } from "../template/styles/ColorUI"

type ListItemUIProps = {
  $isCursor?: boolean
}

export const ListItemUI = styled(RowContainerBeetwen)<ListItemUIProps>`
  border-bottom: 1px solid ${ColorsUI.lines};
  padding: 20px 15px;
  cursor: ${({ $isCursor }) => ($isCursor ? "pointer" : "default")};
  transition: 0.3s;

  &:hover {
    background-color: ${({ $isCursor }) =>
      $isCursor ? ColorsUI.lightBlue : ColorsUI.transparent};
  }
`

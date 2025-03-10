import styled from "styled-components"
import { ColorsUI } from "../template/styles/ColorUI"
import { ContainerProps } from "../settings/types/UITypes"

interface InputUnderlineProps extends ContainerProps {
  $letter?: number
  $pl?: number
}

export const InputUnderline = styled.input<InputUnderlineProps>`
  width: 100%;
  padding-left: ${({ $pl }) => ($pl !== undefined ? $pl : 5)}px;
  padding-bottom: 5px;
  margin-bottom: ${({ $mb }) => $mb || 0}px;

  font-size: 1rem;
  font-weight: 400;
  letter-spacing: ${({ $letter }) => $letter || 0}em;

  color: ${ColorsUI.text1};
  border-bottom: 1px solid ${ColorsUI.lines};

  transition: 0.3ms;

  ::placeholder {
    color: ${ColorsUI.text2};
  }

  :focus {
    border-bottom: 1px solid ${ColorsUI.text1};
  }
`

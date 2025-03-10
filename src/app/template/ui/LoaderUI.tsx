import styled from "styled-components"
import { ColorsUI } from "../styles/ColorUI"

type TLoaderUI = {
  size?: number
  color?: string
}

export const LoaderUI = styled.div<TLoaderUI>`
  width: ${({ size }) => size || 48}px;
  height: ${({ size }) => size || 48}px;
  border: ${({ size }) => (size ? size / 9.5 : 5)}px solid
    ${({ color }) => color || ColorsUI.text1};
  border-bottom-color: ${ColorsUI.transparent};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

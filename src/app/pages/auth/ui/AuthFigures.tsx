import styled from "styled-components"
import { ColorsUI } from "../../../template/styles/ColorUI"

type TEllipse = {
  size: number
}

// Lines
export const AuthVerticalLine = styled.div`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 40px;
  background-color: ${ColorsUI.pink};
`

export const AuthHorizontalLine = styled(AuthVerticalLine)`
  bottom: 0;
  width: 40px;
  height: 100%;
`

export const AuthWhiteLine = styled.div`
  position: absolute;
  z-index: 5;
  height: 50%;
  width: 100%;
  background-color: ${ColorsUI.white};
  bottom: 0;
`

// Ellipse
const Ellipse = styled.div<TEllipse>`
  position: absolute;
  z-index: 10;
  background-color: ${ColorsUI.pink};
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size}px;
`

export const AuthEllipseTop = styled(Ellipse)`
  top: 10px;
  right: 24px;
`

export const AuthEllipseBottom = styled(Ellipse)`
  left: 10px;
  bottom: 19px;
`

import styled from "styled-components"
import { ColorsUI } from "../styles/ColorUI"

type TAlign = "start" | "center" | "right" | "left"

export enum Ag {
  "700_16" = "700_16",
  "600_16" = "600_16",
  "600_14" = "600_14",
  "600_13" = "600_13",
  "600_22" = "600_22",
  "600_20" = "600_20",
  "500_20" = "500_20",
  "500_18" = "500_18",
  "500_14" = "500_14",
  "400_16" = "400_16",
  "400_14" = "400_14",
  "400_12" = "400_12",
  "400_10" = "400_10",
}

type TTextUI = {
  ag: Ag
  text: string
  color?: string
  isNoSelect?: boolean
  mb?: number
  align?: TAlign
  mr?: number
}

type TStyledP = {
  $weight: string
  size: string
  $mb?: number
  $align?: TAlign
  $mr?: number
}

export const TextUI = (props: TTextUI) => {
  const weight = props.ag.substring(0, 3)
  const size = props.ag.substring(4)

  return (
    <P
      style={props.isNoSelect ? { userSelect: "none" } : undefined}
      size={size}
      $weight={weight}
      color={props.color}
      $mb={props.mb}
      $align={props.align}
      $mr={props.mr}
    >
      {props.text}
    </P>
  )
}

const P = styled.p<TStyledP>`
  font-weight: ${({ $weight }) => $weight};
  font-size: ${({ size }) => parseInt(size) / 16}rem;
  line-height: ${({ size }) => parseInt(size) * 1.22}px;
  color: ${({ color }) => color || ColorsUI.text1};
  margin-bottom: ${({ $mb }) => $mb || 0}px;
  text-align: ${({ $align }) => $align || "left"};
  margin-right: ${({ $mr }) => $mr || 0}px;
`

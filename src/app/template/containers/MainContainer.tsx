import styled from "styled-components"
import { ContainerProps } from "../../settings/types/UITypes"

export const MainContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  margin-bottom: ${({ $mb }) => $mb || 0}px;
  margin-right: ${({ $mr }) => $mr || 0}px;
  margin-left: ${({ $ml }) => $ml || 0}px;

  margin-top: ${({ $mt }) => $mt || 0}px;

  padding: ${({ $pv }) => $pv || 0}px ${({ $ph }) => $ph || 0}px;

  padding-left: ${({ $pl, $ph }) => $pl || $ph || 0}px;
  padding-right: ${({ $pr, $ph }) => $pr || $ph || 0}px;

  padding-top: ${({ $pt, $pv }) => $pt || $pv || 0}px;
  padding-bottom: ${({ $pb, $pv }) => $pb || $pv || 0}px;

  ${({ $isPointer }) => ($isPointer ? "cursor: pointer;" : "")}

  ${({ $width, $isFitContent }) =>
    $isFitContent ? "fit-content" : $width ? `width: ${$width}px` : ""}

  ${({ $isRelative }) => ($isRelative ? `position: relative;` : "")}
`

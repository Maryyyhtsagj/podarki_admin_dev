import styled from "styled-components"
import { RowContainerBeetwen } from "../../../template/containers/RowContainer"
import { ColorsUI } from "../../../template/styles/ColorUI"
import { CenterContainer } from "../../../template/containers/CenterContainer"

export const SelectCityPick = styled(RowContainerBeetwen)`
  width: 220px;
  border-bottom: 1px solid ${ColorsUI.text1};
  cursor: pointer;
  position: relative;
`

export const SelectorCityContainer = styled.div`
  position: absolute;
  z-index: 10;

  width: 100%;
  background-color: ${ColorsUI.white};

  height: 0px;
  bottom: 0;

  // ScrollBar

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: ${ColorsUI.lines};
  }
  &::-webkit-scrollbar-thumb {
    background: ${ColorsUI.text1};
    border-radius: 10px;
  }
  // Animation

  border: 1px solid ${ColorsUI.text1};
  animation-name: downSelector;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;

  div {
    animation-name: downContentSelector;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }

  @keyframes downSelector {
    0% {
      height: 0px;
      bottom: 0;
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    to {
      height: 288px;
      bottom: -289px;
    }
  }

  @keyframes downContentSelector {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const CityPick = styled(CenterContainer)`
  cursor: pointer;
  border-bottom: 1px solid ${ColorsUI.lines};
  transition: 0.3s;

  &:hover {
    background-color: ${ColorsUI.lightBlue};
  }

  &:active {
    opacity: 0.6;
  }

  &:last-child {
    border-bottom: 0px;
  }
`

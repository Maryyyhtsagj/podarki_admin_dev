import styled from "styled-components"
import { ColorsUI } from "../../../template/styles/ColorUI"

export const DropdownContainer = styled.div`
  position: relative;
  width: 161px;
  margin-left: 28px;
  margin-right: 28px;
`

export const DropdownButton = styled.div`
  width: 100%;
  height: 47px;
  padding-left: 14px;
  padding-right: 14px;
  background-color: ${ColorsUI.blue};
  color: ${ColorsUI.text1};
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${ColorsUI.transparent};
  transition: border 0.2s;

  &:hover {
    border: 1px solid ${ColorsUI.text2};
  }
`

export const Options = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 4px;
  background-color: ${ColorsUI.blue};
  border: 1px solid ${ColorsUI.text2};
  border-radius: 8px;
  z-index: 10;
`

export const Option = styled.div<{ isSelected: boolean }>`
  padding: 10px 16px;
  color: ${ColorsUI.text2};
  background-color: ${({ isSelected }) =>
    isSelected ? ColorsUI.blue : ColorsUI.lightBlue};
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 8px;

  &:hover {
    background-color: ${ColorsUI.blue};
    border-radius: 8px;
  }
`

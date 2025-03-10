import React from "react"
import styled from "styled-components"
import { ColorsUI } from "../../../template/styles/ColorUI"

export const MessageInputContainerUI = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
`

export const MessageInputUI = styled.input`
  display: flex;
  flex: 1;
  border: 1px solid ${ColorsUI.text2};
  border-right: 0;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 0 25px;
  font-size: 16;
  font-weight: 400;

  &::placeholder {
    color: ${ColorsUI.tifany1};
  }
`

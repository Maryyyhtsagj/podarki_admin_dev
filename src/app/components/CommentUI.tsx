import styled from "styled-components"
import { ColorsUI } from "../template/styles/ColorUI"

type CommentUIProps = {
  $mb?: number
  $letter?: number
}

export const CommentUI = styled.textarea<CommentUIProps>`
  border: 1px solid ${ColorsUI.lines};
  border-radius: 8px;
  min-height: 150px;
  max-height: 250px;
  resize: vertical;
  padding: 15px;

  font-size: 1rem;
  font-weight: 400;
  letter-spacing: ${({ $letter }) => $letter || 0}em;

  margin-bottom: ${({ $mb }) => $mb || 0}px;
`

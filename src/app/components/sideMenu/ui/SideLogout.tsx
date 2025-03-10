import styled from "styled-components"
import { MainContainer } from "../../../template/containers/MainContainer"

export const SideLogout = styled(MainContainer)`
  cursor: pointer;
  width: "fit-content";
  transition: 0.2s;

  &:active {
    opacity: 0.4;
  }
`

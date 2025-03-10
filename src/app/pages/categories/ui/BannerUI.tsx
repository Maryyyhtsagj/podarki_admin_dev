import styled from "styled-components"
import { MainContainer } from "../../../template/containers/MainContainer"

export const BannerUI = styled(MainContainer)`
  width: 100%;
  padding-top: 40%;
  border-radius: 8px;
  position: relative;

  & .img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`

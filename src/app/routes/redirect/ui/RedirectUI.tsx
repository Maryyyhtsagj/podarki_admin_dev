import styled from "styled-components"
import { RowContainerFlex } from "../../../template/containers/RowContainer"

export const RedirectUI = styled(RowContainerFlex)`
  @media screen and (max-width: 1520px) {
    .finances-header {
      padding-top: 10px;
      flex-direction: column;
      align-items: start;

      & .search {
        margin-bottom: 20px;
        margin-right: 20px;
      }

      & .select-date {
        margin-bottom: 20px;
      }

      & .statistics {
        flex-direction: row;

        & p {
          margin-right: 20px;
        }
      }
    }
  }

  @media screen and (max-width: 1140px) {
    .select-container {
      flex-direction: column;
      align-items: start;
    }
  }
`

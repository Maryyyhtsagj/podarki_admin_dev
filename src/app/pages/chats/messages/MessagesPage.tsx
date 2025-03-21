// @ts-nocheck

import { HeaderUI } from "../../../components/HeaderUI"
import { HeaderWrapperUI } from "../../../components/HeaderWrapperUI"
import { StyleProp } from "../../../settings/types/BaseTypes"
import { ColumnContainerFlex } from "../../../template/containers/ColumnContainer"
import { ChatMessages } from "../components/ChatMessages"
import { useAppDispatch, useAppSelector } from "../../../settings/redux/hooks"
import {
  getCurrentSeller,
  selectSellersValues,
} from "../../../modules/sellers/SellersSlice"
import { RowContainerStart } from "../../../template/containers/RowContainer"
import { BackSVG } from "../../../template/svg/BackSVG"
import { ChatHeader } from "../components/ChatHeader"
import { MainContainer } from "../../../template/containers/MainContainer"
import { useNavigate } from "react-router-dom"

export const MessagesPage = () => {
  const { currentSeller } = useAppSelector(selectSellersValues)
  const { financesList } = useAppSelector(selectSellersValues)

  const navigate = useNavigate()

  const handlePop = () => {
    navigate(-1)
  }

  let storeName = financesList.map((finance) => finance.store?.storeName)

  return (
    <ColumnContainerFlex style={styles.container}>
      <HeaderUI>
        <HeaderWrapperUI>
          <RowContainerStart $pl={15} $pb={10}>
            <MainContainer
              style={styles.btn}
              onClick={() => handlePop()}
              $mt={5}
              $mr={20}
            >
              <BackSVG />
            </MainContainer>
            {currentSeller?.sellerData ? (
              <ChatHeader
                key={currentSeller.sellerData._id}
                name={storeName}
                _id={currentSeller.sellerData._id}
                city={currentSeller.sellerData.city}
                phone={currentSeller.sellerData.phone_number}
              />
            ) : null}
          </RowContainerStart>
        </HeaderWrapperUI>
      </HeaderUI>

      <ChatMessages />
    </ColumnContainerFlex>
  )
}

const styles: StyleProp = {
  container: {
    height: "100%",
  },
  btn: {
    cursor: "pointer",
  },
}

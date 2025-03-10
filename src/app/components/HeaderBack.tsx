import { HeaderUI } from "./HeaderUI"
import { MainContainer } from "../template/containers/MainContainer"
import { BackSVG } from "../template/svg/BackSVG"
import { StyleProp } from "../settings/types/BaseTypes"
import { useNavigate } from "react-router-dom"
import { HeaderWrapperUI } from "./HeaderWrapperUI"

export const HeaderBack = () => {
  const navigate = useNavigate()

  const handlePop = () => {
    navigate(-1)
  }

  return (
    <HeaderUI>
      <HeaderWrapperUI $isNoBorder>
        <MainContainer
          onClick={() => handlePop()}
          style={styles.btn}
          $pv={20}
          $ph={20}
        >
          <BackSVG />
        </MainContainer>
      </HeaderWrapperUI>
    </HeaderUI>
  )
}

const styles: StyleProp = {
  btn: {
    cursor: "pointer",
  },
}

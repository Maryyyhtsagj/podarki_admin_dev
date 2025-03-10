import { StyleProp } from "../../settings/types/BaseTypes"
import {
  ColumnContainerFlex,
  ColumnContainerFlexCenter,
} from "../../template/containers/ColumnContainer"
import { HeaderUI } from "../../components/HeaderUI"
import { HeaderWrapperUI } from "../../components/HeaderWrapperUI"
import { DoubleSection } from "../../components/doubleSection/DoubleSection"
import { RowContainerEnd } from "../../template/containers/RowContainer"
import { MainContainer } from "../../template/containers/MainContainer"
import { GiftSVG } from "../../template/svg/GiftSVG"
import { Ag, TextUI } from "../../template/ui/TextUI"
import { PromocodeCreateContent } from "./components/PromocodeCreateContent"
import { PromocodeCards } from "./components/PromocodeCards"

export const PromocodesPage = () => {
  return (
    <ColumnContainerFlex style={styles.container}>
      <HeaderUI>
        <HeaderWrapperUI>
          <ColumnContainerFlexCenter>
            <RowContainerEnd $pl={25}>
              <MainContainer $mr={10} $mb={5}>
                <GiftSVG />
              </MainContainer>

              <TextUI ag={Ag["600_22"]} text={"Создание промокодов"} />
            </RowContainerEnd>
          </ColumnContainerFlexCenter>
        </HeaderWrapperUI>
      </HeaderUI>

      <DoubleSection
        firstContent={<PromocodeCreateContent />}
        secondContent={<PromocodeCards />}
        isScrollSecond
      />
    </ColumnContainerFlex>
  )
}

const styles: StyleProp = {
  container: {
    height: "100%",
  },
}

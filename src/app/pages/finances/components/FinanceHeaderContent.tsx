// @ts-nocheck

import {
  RowContainer,
  RowContainerBeetwenEnd,
  RowContainerBeetwenEndFlex,
  RowContainerEnd,
  RowContainerJustEnd,
} from "../../../template/containers/RowContainer"
import { MainContainer } from "../../../template/containers/MainContainer"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { SearchContainer } from "../../../components/SearchContainer"
import { SelectCity } from "../../../components/searchCity/components/SelectCity"
import { MockCities } from "../../../components/searchCity/mock/MockCities"
import { DatePickerUI } from "../../../components/DatePickerUI"
import { ColorsUI } from "../../../template/styles/ColorUI"
import { FinanceStatistics } from "../../../modules/sellers/types/FinancesTypes"
import { Nullable, StyleProp } from "../../../settings/types/BaseTypes"
import { BackSVG } from "../../../template/svg/BackSVG"
import { useNavigate } from "react-router-dom"
import { CenterContainerFlex } from "../../../template/containers/CenterContainer"
import { useAppSelector } from "../../../settings/redux/hooks"
import { selectSellersValues } from "../../../modules/sellers/SellersSlice"
import { useState } from "react"
import { SellerData } from "../../../modules/sellers/models/SellerData"

type FinanceHeaderContentProps = {
  searchValue: string
  startDate: Date
  endDate: Date
  statistics: Nullable<FinanceStatistics>
  changeStartDate: (date: Date) => void
  changeEndDate: (date: Date) => void
  searchChange: (value: string) => void
  isOrder?: boolean
  orderTitle?: string
  sellerInfo?: boolean
  selectCity?: string
  onCitySelect: (city: string) => void
  storeName: string
}

export const FinanceHeaderContent = (props: FinanceHeaderContentProps) => {
  const navigate = useNavigate()
  const [isDefault, setIsDefault] = useState(true)
  const { financesList } = useAppSelector(selectSellersValues)
  const { currentSeller } = useAppSelector(selectSellersValues)



  let cities = financesList.map((finance) => finance.store?.city)
  let storeName = financesList.map((finance) => finance.store?.storeName)

  const handlePop = () => {
    navigate(-1)
  }
  return (
    <RowContainerBeetwenEnd
      className={"finances-header"}
      $ph={17}
      $pt={37}
      $pb={17}
    >
      <RowContainerBeetwenEndFlex className={"select-container"}>
        <MainContainer>
          {props.isOrder ? (
            <RowContainer $mb={20}>
              <MainContainer
                $mr={10}
                onClick={() => handlePop()}
                style={styles.btn}
              >
                <BackSVG />
              </MainContainer>
              {currentSeller?.sellerData?.ip && (
                <TextUI ag={Ag["500_20"]} text={`ИП: ${storeName}`} />
              )}

              <TextUI ag={Ag["500_20"]} text={props.orderTitle || ""} />
            </RowContainer>
          ) : (
            <TextUI mb={20} ag={Ag["500_20"]} text={"Владельцы на выплату"} />
          )}

          <RowContainerEnd className="search">
            <MainContainer $mr={30}>
              <SearchContainer
                value={props.searchValue}
                onChangeText={props.searchChange}
              />
            </MainContainer>

            <SelectCity
              currentCity={props.selectCity}
              cities={[...new Set(cities)]}
              isDefault={isDefault}
              setIsDefault={setIsDefault}
              onCitySelect={props.onCitySelect}
            />
          </RowContainerEnd>
        </MainContainer>

        <CenterContainerFlex className="select-date">
          <RowContainerJustEnd>
            <MainContainer $mr={16}>
              <TextUI ag={Ag["400_16"]} text="С" />
            </MainContainer>

            <DatePickerUI
              maxDate={new Date()}
              date={props.startDate}
              changeDate={props.changeStartDate}
            />

            <MainContainer $ph={10}>
              <TextUI ag={Ag["400_16"]} text="по" />
            </MainContainer>

            <DatePickerUI
              maxDate={new Date()}
              date={props.endDate}
              changeDate={props.changeEndDate}
              minDate={props.startDate}
            />
          </RowContainerJustEnd>
        </CenterContainerFlex>
      </RowContainerBeetwenEndFlex>
      <MainContainer className="statistics">
        <TextUI
          mb={10}
          color={ColorsUI.green}
          ag={Ag["500_18"]}
          text={`Сумма на выплату: ${props.statistics?.payAmount || 0} р`}
          align={"right"}
        />
        <TextUI
          mb={10}
          color={ColorsUI.bronze}
          ag={Ag["500_18"]}
          text={`Наша выручка: ${props.statistics?.income || 0} р`}
          align={"right"}
        />
        <TextUI
          mb={10}
          ag={Ag["500_18"]}
          text={`Общая сумма: ${props.statistics?.allAmount || 0} р`}
          align={"right"}
        />
      </MainContainer>
    </RowContainerBeetwenEnd>
  )
}

const styles: StyleProp = {
  btn: {
    cursor: "pointer",
  },
}

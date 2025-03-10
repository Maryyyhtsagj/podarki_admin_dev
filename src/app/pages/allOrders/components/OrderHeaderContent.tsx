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
import Dropdown from "../../../components/dropdown/Dropdown"

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
}

export const OrderHeaderContent = (props: FinanceHeaderContentProps) => {
  const navigate = useNavigate()
  const [isDefault, setIsDefault] = useState(true)
  const { financesList } = useAppSelector(selectSellersValues)
  const { currentSeller } = useAppSelector(selectSellersValues)
  const options = ["По стоимости", "По дате", "По позициям", "По продавцам"]
  const [selectedOption, setSelectedOption] = useState(options[0])

  let cities = financesList.map((finance) => finance.store?.city)

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
          <RowContainerEnd className="search">
            <TextUI
              mr={35}
              mb={10}
              ag={Ag["500_20"]}
              text={"Список заказов "}
            />
            <MainContainer $mr={20}>
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
            <Dropdown
              options={options}
              selectedOption={selectedOption}
              onSelect={setSelectedOption}
            />
          </RowContainerJustEnd>
        </CenterContainerFlex>
      </RowContainerBeetwenEndFlex>
    </RowContainerBeetwenEnd>
  )
}

const styles: StyleProp = {
  btn: {
    cursor: "pointer",
  },
}

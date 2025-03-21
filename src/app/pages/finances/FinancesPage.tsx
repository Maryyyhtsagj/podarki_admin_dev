// @ts-nocheck

import { useEffect, useRef, useState } from "react"
import { HeaderUI } from "../../components/HeaderUI"
import { HeaderWrapperUI } from "../../components/HeaderWrapperUI"
import {
  getFinances,
  selectSellersValues,
} from "../../modules/sellers/SellersSlice"
import { useAppDispatch, useAppSelector } from "../../settings/redux/hooks"
import { ColumnContainerFlex } from "../../template/containers/ColumnContainer"
import { Wrapper } from "../../template/containers/Wrapper"
import { FullLoader } from "../../template/ui/FullLoader"
import { FinanceHeaderContent } from "./components/FinanceHeaderContent"
import { DateHelper } from "../../helpers/DateHelper"
import { StyleProp } from "../../settings/types/BaseTypes"
import { FinanceListItem } from "./components/FinanceListItem"
import { FinancesSellers } from "../../modules/sellers/types/FinancesTypes"
import { EmptyList } from "../../components/EmptyList"
import { ScrollContent } from "../../components/ScrollContent"

export const FinancesPage = () => {
  const { financesList, financeStats, isFinancesLoad } =
    useAppSelector(selectSellersValues)
  const dispatch = useAppDispatch()

  const [selectedCity, setSelectedCity] = useState("")

  const handleCitySelect = (city: string) => {
    setSelectedCity(city)
    setList(financesList.filter((finance) => finance.store?.city === city))
  }

  const [list, setList] = useState<FinancesSellers[]>([])

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const [search, setSearch] = useState("")

  const load = useRef(false)

  useEffect(() => {
    dispatch(
      getFinances({
        startDate: DateHelper.getFormatDateDTO(startDate),
        endDate: DateHelper.getFormatDateDTO(endDate),
      }),
    )

    load.current = true
  }, [endDate])

  useEffect(() => {
    setList(financesList)
  }, [financesList])

  const handleSearchChange = (value: string) => {
    setSearch(value)

    if (!value.length) {
      setList(
        financesList.filter((finance) => finance.store?.city === selectedCity),
      )
      return
    }
    setList(
      financesList.filter((finance) =>
        (
          finance.store.ip +
          finance.store.storeName +
          finance.store.phone_number
        )
          .toLowerCase()
          .includes(value.toLowerCase()),
      ),
    )
  }
  // console.log("list", list)

  return (
    <ColumnContainerFlex style={styles.container}>
      <HeaderUI $isNoHeight>
        <HeaderWrapperUI $maxWidth={1600}>
          <FinanceHeaderContent
            selectCity={selectedCity}
            onCitySelect={handleCitySelect}
            searchValue={search}
            searchChange={handleSearchChange}
            startDate={startDate}
            endDate={endDate}
            changeStartDate={setStartDate}
            changeEndDate={setEndDate}
            statistics={financeStats}
          />
        </HeaderWrapperUI>
      </HeaderUI>

      {isFinancesLoad === "load" && !financesList.length ? (
        <FullLoader />
      ) : null}

      <Wrapper $maxWidth={1600}>
        {isFinancesLoad === "completed" && !financesList.length ? (
          <EmptyList listName={"финансов"} />
        ) : null}
        <ScrollContent>
          {list.map((finances, idx) => (
            <FinanceListItem
              key={`finance-${idx}`}
              store={finances.store}
              info={finances.seller}
              finances={finances.finance}
            />
          ))}
        </ScrollContent>
      </Wrapper>
    </ColumnContainerFlex>
  )
}

const styles: StyleProp = {
  container: {
    height: "100%",
  },
}

import { useEffect, useRef, useState } from "react"
import {
  getOrders,
  resetCurrentFinance,
  selectSellersValues,
} from "../../../modules/sellers/SellersSlice"
import { useAppDispatch, useAppSelector } from "../../../settings/redux/hooks"
import {
  FinancesOrdersSeller,
  FinancesSellers,
} from "../../../modules/sellers/types/FinancesTypes"
import { DateHelper } from "../../../helpers/DateHelper"
import { useParams } from "react-router-dom"
import { ColumnContainerFlex } from "../../../template/containers/ColumnContainer"
import { HeaderUI } from "../../../components/HeaderUI"
import { HeaderWrapperUI } from "../../../components/HeaderWrapperUI"
import { FinanceHeaderContent } from "../components/FinanceHeaderContent"
import { FullLoader } from "../../../template/ui/FullLoader"
import { Wrapper } from "../../../template/containers/Wrapper"
import { StyleProp } from "../../../settings/types/BaseTypes"
import { FinanceListItem } from "../components/FinanceListItem"
import { EmptyList } from "../../../components/EmptyList"
import { ScrollContent } from "../../../components/ScrollContent"

export const FinancesOrdersPage = () => {
  const { financesOrdersList, financeOrderStats, isFinancesLoad } =
    useAppSelector(selectSellersValues)

  const dispatch = useAppDispatch()

  const [list, setList] = useState<FinancesOrdersSeller[]>([])

  const [startDate, setStartDate] = useState(new Date())

  const [endDate, setEndDate] = useState(new Date())

  const [search, setSearch] = useState("")

  const load = useRef(false)

  const params = useParams()

  function getSmallestDateFromOrders(orders: any[]): Date | null {
    let smallestDate: Date | null = null

    orders.forEach((item) => {
      const dateTimeString = item.info.dateTime

      const formattedDateTimeString = `20${dateTimeString.substring(
        6,
        8,
      )}-${dateTimeString.substring(3, 5)}-${dateTimeString.substring(0, 2)}`

      const currentDate = new Date(formattedDateTimeString)

      if (smallestDate === null || currentDate < smallestDate) {
        smallestDate = currentDate
      }
    })

    return smallestDate
  }

  const [selectedCity, setSelectedCity] = useState("")

  const handleCitySelect = (city: string) => {
    setSelectedCity(city)
    setList(financesList.filter((finance) => finance.store?.city === city))
  }

  useEffect(() => {
    if (financesOrdersList.length > 0) {
      const smallestDate = getSmallestDateFromOrders(financesOrdersList)
      setStartDate(smallestDate)
    }
  }, [financesOrdersList])

  useEffect(() => {
    dispatch(
      getOrders({
        startDate: DateHelper.getFormatDateDTO(startDate),
        endDate: DateHelper.getFormatDateDTO(endDate),
        sellerId: params.sellerId,
      }),
    )
  }, [])

  useEffect(() => {
    if (load.current) {
      dispatch(
        getOrders({
          startDate: DateHelper.getFormatDateDTO(startDate),
          endDate: DateHelper.getFormatDateDTO(endDate),
          sellerId: params.sellerId,
        }),
      )
    }

    load.current = true
  }, [endDate])

  useEffect(() => {
    return () => {
      dispatch(resetCurrentFinance())
    }
  }, [])

  useEffect(() => {
    setList(financesOrdersList)
  }, [financesOrdersList])

  const handleSearchChange = (value: string) => {
    setSearch(value)

    if (!value.length) {
      setList(financesOrdersList)
      return
    }

    setList(
      financesOrdersList.filter((finance) =>
        (
          finance.info.ip +
          finance.info.storeName +
          finance.info.phone_number +
          finance.finance.paymentCard
        )
          .toLowerCase()
          .includes(value.replace(/ /g, "").toLowerCase()),
      ),
    )
  }

  return (
    <ColumnContainerFlex style={styles.container}>
      <HeaderUI $isNoHeight>
        <HeaderWrapperUI $maxWidth={1600}>
          <FinanceHeaderContent
            isOrder
            searchValue={search}
            searchChange={handleSearchChange}
            startDate={startDate}
            endDate={endDate}
            changeStartDate={setStartDate}
            changeEndDate={setEndDate}
            statistics={financeOrderStats}
          />
        </HeaderWrapperUI>
      </HeaderUI>

      {isFinancesLoad === "load" && !financesOrdersList.length ? (
        <FullLoader />
      ) : null}

      <Wrapper $maxWidth={1600}>
        {isFinancesLoad === "completed" && !financesOrdersList.length ? (
          <EmptyList listName={"заказов"} />
        ) : null}

        <ScrollContent>
          {list.map((finances, idx) => (
            <FinanceListItem
              key={`finance-orders-${idx}`}
              info={finances.info}
              finances={finances.finance}
              isOrder
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

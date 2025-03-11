import React, { useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../settings/redux/hooks"
import {
  getFinances,
  getOrders,
  getSingleOrder,
  resetCurrentFinance,
  selectSellersValues,
} from "../../modules/sellers/SellersSlice"
import {
  FinanceSellerUnit,
  FinancesOrdersSeller,
  FinanceStatistics,
  FinanceStore, OrderItemCount,
} from "../../modules/sellers/types/FinancesTypes"
import { useParams } from "react-router-dom"
import { OrderListItem } from "../allOrders/components/OrderListItem"
import { OrderHeaderContent } from "./components/OrderHeaderContent"
import { HeaderWrapperUI } from "../../components/HeaderWrapperUI"
import { HeaderUI } from "../../components/HeaderUI"
import { ColumnContainerFlex } from "../../template/containers/ColumnContainer"
import { FullLoader } from "../../template/ui/FullLoader"
import { Wrapper } from "../../template/containers/Wrapper"
import { EmptyList } from "../../components/EmptyList"
import { ScrollContent } from "../../components/ScrollContent"
import { StyleProp } from "../../settings/types/BaseTypes"
import { DateHelper } from "../../helpers/DateHelper"


export const OrdersPage = () => {
  const { financesOrdersList, financeOrderStats, isFinancesLoad } =
    useAppSelector(selectSellersValues)

  const dispatch = useAppDispatch()

  const [list, setList] = useState<FinancesOrdersSeller[]>([])

  const [startDate, setStartDate] = useState(new Date())

  const [endDate, setEndDate] = useState(new Date())

  const [search, setSearch] = useState("")

  const load = useRef(false)

  const params = useParams()
  const sellerId = params.sellerId || "67474283c0952662fdb10ba7"

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


  useEffect(() => {
    dispatch(
      getOrders({
        startDate: DateHelper.getFormatDateDTO(startDate),
        endDate: DateHelper.getFormatDateDTO(endDate),
        sellerId,
      }),
    )
    console.log("Seller ID:", params.sellerId)
  }, [])


  useEffect(() => {
    if (load.current && sellerId) {
      dispatch(
        getOrders({
          startDate: DateHelper.getFormatDateDTO(startDate),
          endDate: DateHelper.getFormatDateDTO(endDate),
          sellerId,
        }),
      ).catch((error) => {
        console.error("Failed to fetch orders:", error.message)
      })
    }
    load.current = true
  }, [endDate, sellerId])

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
          <OrderHeaderContent
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
            <OrderListItem
              key={`finance-orders-${idx}`}
              info={finances.info}
              finances={finances.finance}
              isOrder
              goods={finances.info.goods}
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

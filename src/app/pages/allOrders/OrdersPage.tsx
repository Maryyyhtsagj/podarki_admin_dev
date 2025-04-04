// @ts-nocheck

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
  FinanceStore,
  OrderItemCount,
} from "../../modules/sellers/types/FinancesTypes"
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

  const [selectedCity, setSelectedCity] = useState("")

  const handleCitySelect = (city: string) => {
    setSelectedCity(city)
    setList(
      financesOrdersList.filter((finance) => finance.store?.city === city),
    )
  }

  useEffect(() => {
    dispatch(
      getOrders({
        startDate: DateHelper.getFormatDateDTO(startDate),
        endDate: DateHelper.getFormatDateDTO(endDate),
      }),
    )
  }, [])

  useEffect(() => {
    if (load.current) {
      dispatch(
        getOrders({
          startDate: DateHelper.getFormatDateDTO(startDate),
          endDate: DateHelper.getFormatDateDTO(endDate),
        }),
      ).catch((error) => {
        console.error("Failed to fetch orders:", error.message)
      })
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
          <OrderHeaderContent
            isOrder
            selectCity={selectedCity}
            onCitySelect={handleCitySelect}
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


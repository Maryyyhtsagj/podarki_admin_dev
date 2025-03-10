import { useEffect, useRef, useState } from "react"
import { HeaderUI } from "../../components/HeaderUI"
import { HeaderWrapperUI } from "../../components/HeaderWrapperUI"
import { SearchContainer } from "../../components/SearchContainer"
import { SelectCity } from "../../components/searchCity/components/SelectCity"
import { ColumnContainerFlex } from "../../template/containers/ColumnContainer"
import { MainContainer } from "../../template/containers/MainContainer"
import { RowContainer } from "../../template/containers/RowContainer"
import { Wrapper } from "../../template/containers/Wrapper"
import { useAppDispatch, useAppSelector } from "../../settings/redux/hooks"
import {
  getSellers,
  selectSellersValues,
} from "../../modules/sellers/SellersSlice"
import { FullLoader } from "../../template/ui/FullLoader"
import { OwnerListItem } from "./components/OwnerListItem"
import { Seller } from "../../modules/sellers/models/Seller"
import { StyleProp } from "../../settings/types/BaseTypes"
import { MockCities } from "../../components/searchCity/mock/MockCities"
import { EmptyList } from "../../components/EmptyList"
import { ScrollContent } from "../../components/ScrollContent"

export const OwnersPage = () => {
  const { sellersList, isSellersLoad } = useAppSelector(selectSellersValues)

  const dispatch = useAppDispatch()

  const load = useRef(true)

  const [list, setList] = useState<Seller[]>([])

  const [search, setSearch] = useState("")

  useEffect(() => {
    if (!load.current) return

    dispatch(getSellers())

    load.current = false
  }, [])

  useEffect(() => {
    setList(sellersList)
  }, [sellersList])

  const handleChangeSearch = (value: string) => {
    setSearch(value)

    if (!value.length) {
      setList(sellersList)
      return
    }

    setList(
      sellersList.filter((seller) =>
        (seller.name + seller.phone_number + seller.city)
          .toLowerCase()
          .includes(value.toLowerCase()),
      ),
    )
  }

  const [selectedCity, setSelectedCity] = useState("")

  const handleCitySelect = (city: string) => {
    setSelectedCity(city)
    setList(financesList.filter((finance) => finance.store?.city === city))
  }

  return (
    <ColumnContainerFlex style={styles.container}>
      <HeaderUI>
        <HeaderWrapperUI>
          <RowContainer $pv={17} $ph={17}>
            <MainContainer $mr={35}>
              <SearchContainer
                value={search}
                onChangeText={(value: string) => handleChangeSearch(value)}
              />
            </MainContainer>
            {/* 
            <SelectCity
              currentCity={""}
              cities={MockCities}
              isDefault={true}
              setIsDefault={() => {}}
            />  */}
          </RowContainer>
        </HeaderWrapperUI>
      </HeaderUI>
      {isSellersLoad === "load" && !sellersList.length ? <FullLoader /> : null}

      <Wrapper $maxWidth={1200}>
        {isSellersLoad === "completed" && !sellersList.length ? (
          <EmptyList listName={"владельцев"} />
        ) : null}

        <ScrollContent>
          {list.map((seller) => (
            <OwnerListItem key={seller._id} seller={seller} />
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

import { useEffect, useState } from "react"
import {
  getClaims,
  selectSellersValues,
} from "../../modules/sellers/SellersSlice"
import { useAppDispatch, useAppSelector } from "../../settings/redux/hooks"
import { ColumnContainerFlex } from "../../template/containers/ColumnContainer"
import { FullLoader } from "../../template/ui/FullLoader"
import { HeaderUI } from "../../components/HeaderUI"
import { SellersTabMenu } from "./components/SellersTabMenu"
import { SellersTabMenuType } from "./types/SellersUITypes"
import { Wrapper } from "../../template/containers/Wrapper"
import { SellersListContent } from "./components/SellersListContent"
import { Seller } from "../../modules/sellers/models/Seller"
import { HeaderWrapperUI } from "../../components/HeaderWrapperUI"
import { StyleProp } from "../../settings/types/BaseTypes"
import { EmptyList } from "../../components/EmptyList"
import { ScrollContent } from "../../components/ScrollContent"

export const SellersPage = () => {
  const { isClaimsLoad, claimsList, claimsListDeny, claimsListPending } =
    useAppSelector(selectSellersValues)

  const dispatch = useAppDispatch()

  const [activeTab, setActiveTab] = useState(SellersTabMenuType.pending)

  const [list, setList] = useState<Seller[]>([])

  useEffect(() => {
    if (isClaimsLoad !== "load") {
      dispatch(getClaims())
    }
  }, [])

  useEffect(() => {
    switch (activeTab) {
      case SellersTabMenuType.pending:
        setList(claimsListPending)
        break
      case SellersTabMenuType.denied:
        setList(claimsListDeny)
        break
    }
  }, [activeTab, claimsList])

  const handleChangeTab = (key: SellersTabMenuType) => {
    setActiveTab(key)
  }
  return (
    <ColumnContainerFlex style={styles.container}>
      <HeaderUI>
        <HeaderWrapperUI>
          <SellersTabMenu activeTab={activeTab} onChangeTab={handleChangeTab} />
        </HeaderWrapperUI>
      </HeaderUI>

      {isClaimsLoad === "load" && !claimsList.length ? <FullLoader /> : null}

      <Wrapper $maxWidth={1200}>
        {isClaimsLoad === "completed" && !claimsList.length ? (
          <EmptyList listName={"заявок"} />
        ) : null}
        <ScrollContent>
          <SellersListContent claimsList={list} />
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

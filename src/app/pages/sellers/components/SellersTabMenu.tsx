import { MockSellersTabMenu } from "../mock/MockSellersTabMenu"
import { SellersTabMenuType } from "../types/SellersUITypes"
import { useAppSelector } from "../../../settings/redux/hooks"
import { selectSellersValues } from "../../../modules/sellers/SellersSlice"
import { TabMenu } from "../../../components/tabMenu/TabMenu"

type SellersTabMenuProps = {
  activeTab: SellersTabMenuType
  onChangeTab: (key: SellersTabMenuType) => void
}

export const SellersTabMenu = (props: SellersTabMenuProps) => {
  const { claimsListPending } = useAppSelector(selectSellersValues)

  return (
    <TabMenu
      tab={MockSellersTabMenu}
      onChangeTab={(key) => props.onChangeTab(key as SellersTabMenuType)}
      isNewKey={SellersTabMenuType.pending}
      isNewLength={claimsListPending.length}
      activeTab={props.activeTab}
    />
  )
}

import React from "react"
import { SideLinkUI } from "../ui/SideLinkUI"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { ColorsUI } from "../../../template/styles/ColorUI"
import { NewPendingUI } from "../../NewPendingUI"
import { selectSellersValues } from "../../../modules/sellers/SellersSlice"
import { useAppSelector } from "../../../settings/redux/hooks"

type SideLinkProps = {
  onNavigate: () => void
  isCurrentPath: boolean
  linkText: string
  isPending?: boolean
}

export const SideLink = (props: SideLinkProps) => {
  const { claimsListPending } = useAppSelector(selectSellersValues)

  return (
    <SideLinkUI
      onClick={props.onNavigate}
      color={props.isCurrentPath ? ColorsUI.pink2 : ColorsUI.transparent}
      $pv={16}
      $pl={45}
    >
      <TextUI isNoSelect ag={Ag["500_20"]} text={props.linkText} />
      {props.isPending && claimsListPending.length ? <NewPendingUI /> : null}
    </SideLinkUI>
  )
}

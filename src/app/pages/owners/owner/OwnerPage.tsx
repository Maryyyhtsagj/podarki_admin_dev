import { useEffect, useRef } from "react"
import { ColumnContainerFlex } from "../../../template/containers/ColumnContainer"
import { HeaderBack } from "../../../components/HeaderBack"
import { useParams } from "react-router-dom"
import { OwnerParams } from "../../../routes/params/OwnerParams"
import { useAppDispatch, useAppSelector } from "../../../settings/redux/hooks"
import {
  getCurrentSeller,
  putBanedSeller,
  selectSellersValues,
} from "../../../modules/sellers/SellersSlice"
import { FullLoader } from "../../../template/ui/FullLoader"
import { CenterContainerFlex } from "../../../template/containers/CenterContainer"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { MainContainer } from "../../../template/containers/MainContainer"
import { Wrapper } from "../../../template/containers/Wrapper"
import { UserInfo } from "../../../components/UserInfo"
import { OwnerButtonsGroup } from "../ui/OwnerButtonsGroup"
import { OwnerButtons } from "../components/OwnerButtons"

export const OwnerPage = () => {
  const params = useParams<OwnerParams>()
  const load = useRef(true)

  const { isSellersLoad, currentSeller } = useAppSelector(selectSellersValues)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!load.current) return

    dispatch(getCurrentSeller(params.ownerId!))

    load.current = false
  }, [])

  const handleBanSeller = async () => {
    await dispatch(
      putBanedSeller({
        seller_id: currentSeller?.sellerData?._id!,
        ban: !currentSeller?.sellerData?.is_banned,
      }),
    )

    await dispatch(getCurrentSeller(params.ownerId!))
  }

  if (isSellersLoad === "load") {
    return <FullLoader />
  }

  if (!currentSeller || currentSeller?.sellerData === null) {
    return (
      <CenterContainerFlex style={{ height: "100%" }}>
        <TextUI ag={Ag["700_16"]} text={"Владелец не найден"} />
      </CenterContainerFlex>
    )
  }

  return (
    <ColumnContainerFlex>
      <HeaderBack />
      <Wrapper $maxWidth={1000} $pt={20}>
        <MainContainer $pl={50}>
          <UserInfo
            seller={currentSeller.sellerData}
            shopsCount={currentSeller.shopsCount}
          />
        </MainContainer>
        <OwnerButtonsGroup $pl={50} $pt={15}>
          <OwnerButtons
            id={currentSeller.sellerData._id}
            is_banned={currentSeller.sellerData.is_banned}
            onBaned={handleBanSeller}
          />
        </OwnerButtonsGroup>
      </Wrapper>
    </ColumnContainerFlex>
  )
}

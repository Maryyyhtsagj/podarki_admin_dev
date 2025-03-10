import {
  RowContainer,
  RowContainerBeetwen,
} from "../../../template/containers/RowContainer"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { ButtonUI } from "../../../template/ui/ButtonUI"
import { MainContainer } from "../../../template/containers/MainContainer"
import { CloseSVG } from "../../../template/svg/CloseSVG"
import { ColorsUI } from "../../../template/styles/ColorUI"
import { useAppDispatch } from "../../../settings/redux/hooks"
import {
  deletePromocode,
  getPromocodes,
} from "../../../modules/promocodes/PromocodesSlice"

type PromocodeCardContentProps = {
  isExpired?: boolean
  text: string
  promocodeName: string
  id: string
}

export const PromocodeCardContent = (props: PromocodeCardContentProps) => {
  let dispatch = useAppDispatch()

  let handleDeletePromocode = function (id: string) {
    dispatch(deletePromocode(id))
    dispatch(getPromocodes())
  }
  return (
    <>
      <RowContainerBeetwen $mb={10}>
        <TextUI ag={Ag["400_16"]} text={props.promocodeName} />
        <ButtonUI $isCustom $backColor={"transparent"}>
          <MainContainer
            onClick={() => handleDeletePromocode(props.id)}
            $isPointer
            $mr={-12}
          >
            <CloseSVG />
          </MainContainer>
        </ButtonUI>
      </RowContainerBeetwen>

      <TextUI ag={Ag["600_16"]} text={`Промокод: ${props.text}`} />
    </>
  )
}

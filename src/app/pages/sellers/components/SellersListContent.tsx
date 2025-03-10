import { useNavigate } from "react-router"
import { MaskHelper } from "../../../helpers/MaskHelper"
import { Seller } from "../../../modules/sellers/models/Seller"
import { MainContainer } from "../../../template/containers/MainContainer"
import { ButtonUI, getButtonTextColor } from "../../../template/ui/ButtonUI"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { SellersTabMenuType } from "../types/SellersUITypes"
import { ColorsUI } from "../../../template/styles/ColorUI"
import { ListItemUI } from "../../../components/ListItemUI"

type SellerListProps = {
  claimsList: Seller[]
}

export const SellersListContent = ({ claimsList }: SellerListProps) => {
  const navigate = useNavigate()

  const handleNavigate = (seller: Seller) => {
    navigate(`/seller/${seller._id}`)
  }

  return (
    <>
      {claimsList.map((seller) => (
        <ListItemUI key={seller._id}>
          <div>
            <MainContainer $mb={10}>
              <TextUI ag={Ag["400_16"]} text={seller.name} />
            </MainContainer>
            <TextUI
              ag={Ag["400_16"]}
              text={MaskHelper.formatPhoneNumber(seller.phone_number)}
            />
          </div>

          <MainContainer $width={170}>
            <ButtonUI
              disabled={seller.status !== SellersTabMenuType.pending}
              onClick={() => handleNavigate(seller)}
              $backColor={
                seller.status === SellersTabMenuType.pending
                  ? "border"
                  : "transparent"
              }
              $disabledColor={ColorsUI.transparent}
            >
              <TextUI
                ag={Ag["400_16"]}
                color={
                  seller.status === SellersTabMenuType.pending
                    ? getButtonTextColor("border")
                    : ColorsUI.red
                }
                text={
                  seller.status === SellersTabMenuType.pending
                    ? "Новая"
                    : "Отклонено"
                }
              />
            </ButtonUI>
          </MainContainer>
        </ListItemUI>
      ))}
    </>
  )
}

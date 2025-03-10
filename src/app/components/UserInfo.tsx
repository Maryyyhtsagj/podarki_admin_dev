import { MaskHelper } from "../helpers/MaskHelper"
import { Seller } from "../modules/sellers/models/Seller"
import { MainContainer } from "../template/containers/MainContainer"
import { RowContainerStart } from "../template/containers/RowContainer"
import { Ag, TextUI } from "../template/ui/TextUI"

type UserInfoProps = {
  seller: Seller
  shopsCount?: number
}

export const UserInfo = ({ seller, shopsCount }: UserInfoProps) => {
  return (
    <RowContainerStart $mb={50}>
      <MainContainer $mr={130}>
        <TextUI mb={15} ag={Ag["600_14"]} text={"Имя"} />
        <TextUI mb={20} ag={Ag["400_16"]} text={seller.name || "Не указан"} />

        <TextUI mb={15} ag={Ag["600_14"]} text={"Почта"} />
        <TextUI mb={20} ag={Ag["400_16"]} text={seller.email || "Не указан"} />

        <TextUI mb={15} ag={Ag["600_14"]} text={"Телефон"} />
        <TextUI
          mb={20}
          ag={Ag["400_16"]}
          text={
            MaskHelper.formatPhoneNumber(seller.phone_number) || "Не указан"
          }
        />

        <TextUI mb={15} ag={Ag["600_14"]} text={"Город"} />
        <TextUI mb={20} ag={Ag["400_16"]} text={seller.city || "Не указан"} />

        <TextUI mb={15} ag={Ag["600_14"]} text={"Адрес"} />
        <TextUI
          mb={20}
          ag={Ag["400_16"]}
          text={seller.address || "Не указан"}
        />
      </MainContainer>

      <MainContainer $mr={shopsCount !== undefined ? 50 : 0}>
        <TextUI mb={15} ag={Ag["600_14"]} text={"Фирма"} />
        <TextUI mb={20} ag={Ag["400_16"]} text={seller.ip || "Не указан"} />

        <TextUI mb={15} ag={Ag["600_14"]} text={"Юридическое название"} />
        <TextUI
          mb={20}
          ag={Ag["400_16"]}
          text={seller.legal_name || "Не указан"}
        />

        <TextUI mb={15} ag={Ag["600_14"]} text={"ИНН"} />
        <TextUI mb={20} ag={Ag["400_16"]} text={seller.inn || "Не указан"} />

        <TextUI mb={15} ag={Ag["600_14"]} text={"ОГРН"} />
        <TextUI mb={20} ag={Ag["400_16"]} text={seller.ogrn || "Не указан"} />

        <TextUI mb={15} ag={Ag["600_14"]} text={"Рассчетный счет"} />
        <TextUI
          mb={20}
          ag={Ag["400_16"]}
          text={seller.bill_number || "Не указан"}
        />
      </MainContainer>

      {shopsCount !== undefined ? (
        <MainContainer>
          <TextUI mb={15} ag={Ag["600_14"]} text={"ID"} />
          <TextUI mb={20} ag={Ag["400_16"]} text={seller._id || "Не указан"} />
          <TextUI mb={15} ag={Ag["600_14"]} text={"Количество магазинов"} />
          <TextUI mb={20} ag={Ag["400_16"]} text={shopsCount.toString()} />
        </MainContainer>
      ) : null}
    </RowContainerStart>
  )
}

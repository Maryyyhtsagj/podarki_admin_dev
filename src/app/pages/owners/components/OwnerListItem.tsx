import React from "react"
import { Seller } from "../../../modules/sellers/models/Seller"
import {
  RowContainer,
  RowContainerBeetwen,
} from "../../../template/containers/RowContainer"
import { MainContainer } from "../../../template/containers/MainContainer"
import { ButtonUI } from "../../../template/ui/ButtonUI"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { MaskHelper } from "../../../helpers/MaskHelper"
import { ListItemUI } from "../../../components/ListItemUI"
import { ColorsUI } from "../../../template/styles/ColorUI"
import { useNavigate } from "react-router-dom"
import { PathApp } from "../../../routes/path/PathApp"

type OwnerListItemProps = {
  seller: Seller
}

export const OwnerListItem = (props: OwnerListItemProps) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`${PathApp.owners.path}/${props.seller._id}`)
  }

  return (
    <ListItemUI>
      <div>
        <RowContainer $mb={10}>
          <TextUI ag={Ag["600_16"]} text={props.seller.name} />
          <MainContainer $ph={10}>
            <TextUI ag={Ag["400_16"]} text={"|"} />
          </MainContainer>
          <TextUI
            ag={Ag["400_16"]}
            text={`ID: ${props.seller._id || "Не указан"}`}
          />
        </RowContainer>

        <RowContainer>
          <TextUI
            ag={Ag["400_16"]}
            text={MaskHelper.formatPhoneNumber(props.seller.phone_number)}
          />
          <MainContainer $ph={10}>
            <TextUI ag={Ag["400_16"]} text={"|"} />
          </MainContainer>
          <TextUI
            ag={Ag["400_16"]}
            text={`г. ${props.seller.city || "Не указан"}`}
          />
        </RowContainer>
      </div>

      <RowContainer>
        {props.seller.is_banned ? (
          <MainContainer $mr={25}>
            <TextUI
              color={ColorsUI.red}
              ag={Ag["400_16"]}
              text={"Заблокирован"}
            />
          </MainContainer>
        ) : null}
        <MainContainer $width={170}>
          <ButtonUI $backColor={"border"} onClick={() => handleNavigate()}>
            <TextUI ag={Ag["400_16"]} text={"Подробнее"} />
          </ButtonUI>
        </MainContainer>
      </RowContainer>
    </ListItemUI>
  )
}

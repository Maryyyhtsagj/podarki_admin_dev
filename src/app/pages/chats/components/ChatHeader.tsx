import { MainContainer } from "../../../template/containers/MainContainer"
import { RowContainer } from "../../../template/containers/RowContainer"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { LineTextVertical } from "../../finances/ui/LineTextVertical"
import { MaskHelper } from "../../../helpers/MaskHelper"

type ChatHeaderProps = {
  name: string
  _id: string
  city: string
  phone: string
}

export const ChatHeader = (props: ChatHeaderProps) => {
  return (
    <MainContainer>
      <RowContainer>
        <TextUI ag={Ag["600_20"]} text={props.name} />
        <LineTextVertical $heightPX={15} $width={2} />
        <TextUI ag={Ag["600_20"]} text={"Чат"} />
      </RowContainer>

      <RowContainer>
        <TextUI ag={Ag["400_12"]} text={`ID: ${props._id}`} />
        <LineTextVertical $heightPX={10} $width={0.5} />
        <TextUI ag={Ag["400_12"]} text={`г.${props.city}`} />
        <LineTextVertical $heightPX={10} $width={0.5} />
        <TextUI
          ag={Ag["400_12"]}
          text={MaskHelper.formatPhoneNumber(props.phone)}
        />
      </RowContainer>
    </MainContainer>
  )
}

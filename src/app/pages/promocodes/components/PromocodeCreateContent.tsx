import { useState } from "react"
import { InputUnderline } from "../../../components/InputUnderline"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { ButtonUI } from "../../../template/ui/ButtonUI"
import { ColorsUI } from "../../../template/styles/ColorUI"
import { useAppDispatch, useAppSelector } from "../../../settings/redux/hooks"
import {
  createPromocode,
  getPromocodes,
  selectPromocodesValues,
} from "../../../modules/promocodes/PromocodesSlice"
import toast from "react-hot-toast"

export const PromocodeCreateContent = () => {
  const dispatch = useAppDispatch()
  const [titlePromo, setTitlePromo] = useState("")
  const [namePromo, setNamePromo] = useState("")

  const [isLoading, setIsLoading] = useState(false)

  const { isPromocodeUpdate } = useAppSelector(selectPromocodesValues)

  const handleCreatePromocode = async () => {
    if (isLoading) return

    setIsLoading(true)
    try {
      await dispatch(
        createPromocode({
          text: titlePromo,
          event_name: namePromo,
        }),
      )

      setTitlePromo("")
      setNamePromo("")

      toast.success("Промокод добавлен")

      await dispatch(getPromocodes())
    } catch {}

    setIsLoading(false)
  }

  return (
    <>
      <TextUI mb={15} ag={Ag["500_14"]} text={"Событие"} />
      <InputUnderline
        $mb={40}
        value={namePromo}
        placeholder={"Напишите  Событие"}
        $pl={0}
        onChange={(e) => setNamePromo(e.target.value)}
      />

      <TextUI mb={15} ag={Ag["500_14"]} text={"Промокод"} />
      <InputUnderline
        $mb={40}
        value={titlePromo}
        $pl={0}
        placeholder={"Придумайте промокод"}
        onChange={(e) => setTitlePromo(e.target.value.toUpperCase())}
      />


      {/*/!* <TextUI mb={15} ag={Ag["500_14"]} text={"Скидка %"} />*/}
      {/*<InputUnderline*/}
      {/*  $mb={40}*/}
      {/*  value={discountPromo}*/}
      {/*  $pl={0}*/}
      {/*  placeholder={"Введите скидку"}*/}
      {/*  onChange={(e) => setDiscountPromo(e.target.value)}*/}
      {/*/>*/}

      {/*<TextUI mb={15} ag={Ag["500_14"]} text={"Действует до"} />*/}
      {/*<MainContainer $width={140} $mb={40}>*/}
      {/*  <DatePickerUI*/}
      {/*    isUnderline*/}
      {/*    date={date}*/}
      {/*    changeDate={setDate}*/}
      {/*    minDate={new Date()}*/}
      {/*  />*/}
      {/*</MainContainer> *!/*/}

      <ButtonUI
        disabled={isPromocodeUpdate === "load"}
        onClick={() => handleCreatePromocode()}
      >
        <TextUI color={ColorsUI.white} ag={Ag["600_16"]} text={"Создать"} />
      </ButtonUI>
    </>
  )
}

import React from "react"
import { CenterContainerFlex } from "../containers/CenterContainer"
import { Ag, TextUI } from "../ui/TextUI"

export const ErrorPage = () => {
  return (
    <CenterContainerFlex>
      <TextUI ag={Ag["700_16"]} text={"404"} />
      <TextUI ag={Ag["700_16"]} text={"Страница не найдена"} />
    </CenterContainerFlex>
  )
}

import React from "react"
import { ListItemUI } from "./ListItemUI"
import { Ag, TextUI } from "../template/ui/TextUI"

type EmptyListProps = {
  listName: string
}

export const EmptyList = ({ listName }: EmptyListProps) => {
  return (
    <ListItemUI>
      <TextUI ag={Ag["500_20"]} text={`Список ${listName} пуст`} />
    </ListItemUI>
  )
}

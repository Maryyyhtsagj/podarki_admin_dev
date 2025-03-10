import { RowContainer } from "../containers/RowContainer"
import styled from "styled-components"
import { MainContainer } from "../containers/MainContainer"
import { CheckedSVG } from "../svg/CheckedSVG"
import { Ag, TextUI } from "./TextUI"
import { useAppDispatch } from "../../settings/redux/hooks"
import {
  deleteCategory,
  getCategories,
} from "../../modules/categories/CategoriesSlice"
import { useEffect } from "react"

type CheckboxUIProps = {
  text: string
  id: string
  checked: boolean
  onChange: () => void
}

export const CheckboxUI = (props: CheckboxUIProps) => {
  let dispatch = useAppDispatch()

  const handleDeleteCat = (id: string) => {
    dispatch(deleteCategory(id))
    dispatch(getCategories())
  }

  return (
    <Label>
      <RowContainer>
        <MainContainer onClick={() => handleDeleteCat(props.id)} $mr={15}>
          <TextUI ag={Ag["400_16"]} text={"X"} />
        </MainContainer>
        <TextUI isNoSelect ag={Ag["400_16"]} text={props.text} />
      </RowContainer>
    </Label>
  )
}

const InputCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const Label = styled.label`
  cursor: pointer;
`

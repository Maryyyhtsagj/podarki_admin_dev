import styled from "styled-components"
import { ColorsUI } from "../template/styles/ColorUI"
import { SearchSVG } from "../template/svg/SearchSVG"

type SearchContainerProps = {
  value: string
  onChangeText: (value: string) => void
}

export const SearchContainer = (props: SearchContainerProps) => {
  return (
    <SearchContainerUI>
      <SearchInputUI
        value={props.value}
        onChange={(e) => props.onChangeText(e.target.value)}
        placeholder={"Поиск"}
      />
      <SearchSVG />
    </SearchContainerUI>
  )
}

const SearchContainerUI = styled.div`
  width: 276px;
  border: 1px solid ${ColorsUI.text2};
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 12px;
`
const SearchInputUI = styled.input`
  font-weight: 400;
  font-size: 1rem;
  line-height: 19.5px;
  color: ${ColorsUI.text1};
  flex: 1;
  margin-right: 10px;
  background-color: ${ColorsUI.transparent};
`

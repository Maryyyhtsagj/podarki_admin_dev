import { Ag, TextUI } from "../../../template/ui/TextUI"
import { TriangleDownSVG } from "../../../template/svg/TriangleDownSVG"
import { useState } from "react"
import {
  CityPick,
  SelectCityPick,
  SelectorCityContainer,
} from "../ui/SearchCityUI"

type SelectCityProps = {
  currentCity: string
  cities: string[]
  isDefault: boolean
  setIsDefault: (value: boolean) => void
  onCitySelect: (city: string) => void
}

export const SelectCity = (props: SelectCityProps) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleCitySelect = (city: string) => {
    setIsVisible(false)
    props.onCitySelect(city)
    props.setIsDefault(false)
  }

  return (
    <SelectCityPick
      onMouseMove={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      $pb={10}
    >
      <TextUI
        isNoSelect
        ag={Ag["500_20"]}
        text={props.isDefault ? "По городу" : props.currentCity}
      />
      <TriangleDownSVG />

      {isVisible ? (
        <SelectorCityContainer>
          {props.cities.map((city) => (
            <CityPick
              $pv={15}
              key={city}
              onClick={() => handleCitySelect(city)}
            >
              <TextUI isNoSelect ag={Ag["500_14"]} text={city} />
            </CityPick>
          ))}
        </SelectorCityContainer>
      ) : null}
    </SelectCityPick>
  )
}

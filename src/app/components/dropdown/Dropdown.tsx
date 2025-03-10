import React, { useState } from "react"
import {
  DropdownContainer,
  DropdownButton,
  Arrow,
  Options,
  Option,
} from "./ui/Drop"
// @ts-ignore
import dropSvg from "./../../../assets/img/drop.svg"

type DropdownProps = {
  options: string[]
  selectedOption: string
  onSelect: (option: string) => void
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedOption,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen((prev) => !prev)

  const handleOptionClick = (option: string) => {
    onSelect(option)
    setIsOpen(false)
  }

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        {selectedOption}
        <div>
          <img src={dropSvg} />
        </div>
      </DropdownButton>
      {isOpen && (
        <Options>
          {options.map((option) => (
            <Option
              key={option}
              onClick={() => handleOptionClick(option)}
              isSelected={option === selectedOption}
            >
              {option}
            </Option>
          ))}
        </Options>
      )}
    </DropdownContainer>
  )
}

export default Dropdown

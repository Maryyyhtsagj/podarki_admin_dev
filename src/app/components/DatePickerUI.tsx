import { forwardRef, useRef, useState } from "react"
import DatePicker, { registerLocale } from "react-datepicker"
import ru from "date-fns/locale/ru"

registerLocale("ru", ru)

import "react-datepicker/dist/react-datepicker.css"
import { MainContainer } from "../template/containers/MainContainer"
import {
  RowContainer,
  RowContainerBeetwen,
} from "../template/containers/RowContainer"
import { CalendarSVG } from "../template/svg/CalendarSVG"
import { Ag, TextUI } from "../template/ui/TextUI"
import { DateHelper } from "../helpers/DateHelper"
import styled from "styled-components"
import { ColorsUI } from "../template/styles/ColorUI"

type DatePickerUIProps = {
  date: Date
  changeDate: (date: Date) => void
  minDate?: Date
  maxDate?: Date
  isUnderline?: boolean
}

export const DatePickerUI = (props: DatePickerUIProps) => {
  const calendarRef = useRef<DatePicker>(null)

  const handleOpenCalendar = () => {
    calendarRef.current?.setOpen(true)
  }

  return (
    <DatePicker
      ref={calendarRef}
      customInput={
        <CustomInput
          isUnderline={props.isUnderline}
          onOpenCalendar={handleOpenCalendar}
          date={props.date}
        />
      }
      locale={"ru"}
      selected={props.date}
      onChange={(date) => {
        if (date) {
          props.changeDate(date)
        }
      }}
      minDate={props.minDate}
      maxDate={props.maxDate}
    />
  )
}

type CustomInputProps = {
  date: Date
  onOpenCalendar: () => void
  isUnderline?: boolean
}

const CustomInput = forwardRef((props: CustomInputProps, ref) => {
  return (
    <CustomInputUI
      $isUnderline={props.isUnderline}
      $pb={props.isUnderline ? 8 : 0}
      $pv={props.isUnderline ? 0 : 15}
      $ph={props.isUnderline ? 0 : 10}
      onClick={() => props.onOpenCalendar()}
    >
      <MainContainer>
        <TextUI
          isNoSelect
          ag={Ag["400_16"]}
          text={DateHelper.getFormatDate(props.date)}
        />
      </MainContainer>
      <CalendarSVG />
    </CustomInputUI>
  )
})

type CustomInputUIProps = {
  $isUnderline?: boolean
}

const CustomInputUI = styled(RowContainerBeetwen)<CustomInputUIProps>`
  width: 120px;
  background-color: ${({ $isUnderline }) =>
    $isUnderline ? ColorsUI.transparent : ColorsUI.blue};
  border-radius: ${({ $isUnderline }) => ($isUnderline ? 0 : 8)}px;

  ${({ $isUnderline }) =>
    $isUnderline ? `border-bottom: 1px solid ${ColorsUI.text1};` : ""}
`

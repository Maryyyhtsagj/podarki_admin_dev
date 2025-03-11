import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../settings/redux/hooks"
import Modal from "../../../components/Modal"
import { ListItemUI } from "../../../components/ListItemUI"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { ButtonUI } from "../../../template/ui/ButtonUI"
import { RowContainer } from "../../../template/containers/RowContainer"
import { MainContainer } from "../../../template/containers/MainContainer"
import { LineTextVertical } from "../ui/LineTextVertical"
import { DateHelper } from "../../../helpers/DateHelper"
import { ColorsUI } from "../../../template/styles/ColorUI"
import styled from "styled-components"
import {
  getSingleOrder,
  selectSellersValues,
} from "../../../modules/sellers/SellersSlice"

type TableItem = {
  title: string
  photo_list?: string[]
  price: number
  count: number
  _id?: string
}

type TableProps = {
  items: TableItem[]
}

type GoodType = {
  _id: string
  title: string
  count: number
  price: {
    $numberDecimal: string
  }
  photo_list?: string[]
}

type FinanceListItemProps = {
  info: {
    order_number?: string
    dateTime: string
    phone_number: string
    storeName: string
    time?: {
      hours: number
      minutes: number
    }
  }
  finances: {
    payAmount: number
  }
  isOrder?: boolean
  goods?: GoodType[]
}

const Container = styled.div`
  margin-top: 20px;
  border-radius: 8px;
  border: 1px solid ${ColorsUI.border};
  overflow: hidden;
`

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`

const Cell = styled.td`
  padding: 10px;
  border-left: 1px solid ${ColorsUI.border};
  text-align: left;
  border-top: 1px solid ${ColorsUI.border};
`
const FirstCell = styled.td`
  padding: 10px;
  text-align: left;
  border-top: 1px solid ${ColorsUI.border};
`

const HeaderCell = styled.th`
  padding: 10px;
  background-color: ${ColorsUI.headerBackground};
  font-weight: normal;
  text-align: left;
  border-left: 1px solid ${ColorsUI.border};
`
const FirstHeaderCell = styled.th`
  padding: 10px;
  background-color: ${ColorsUI.headerBackground};
  font-weight: normal;
  text-align: left;
`
const FooterCell = styled.td`
  padding: 10px;
  background-color: ${ColorsUI.footerBackground};
  color: ${ColorsUI.green};
  font-weight: bold;
  text-align: start;
  border-top: 1px solid ${ColorsUI.border};
`

const OrderTable: React.FC<TableProps> = ({ items }) => {
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.count,
    0,
  )
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <FirstHeaderCell>
              <TextUI ag={Ag["500_14"]} text="Товар" />
            </FirstHeaderCell>
            <HeaderCell>
              <TextUI ag={Ag["500_14"]} text="Позиций" />
            </HeaderCell>
            <HeaderCell>
              <TextUI ag={Ag["500_14"]} text="Стоимость" />
            </HeaderCell>
            <HeaderCell>
              <TextUI ag={Ag["500_14"]} text="Всего" />
            </HeaderCell>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <FirstCell>
                <TextUI ag={Ag["400_14"]} text={item.title} />
              </FirstCell>
              <Cell>
                <TextUI ag={Ag["400_14"]} text={`${item.count}`} />
              </Cell>
              <Cell>
                <TextUI ag={Ag["400_14"]} text={`${item.price}`} />
              </Cell>
              <Cell>
                <TextUI ag={Ag["400_14"]} text={`${item.price * item.count}`} />
              </Cell>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <FooterCell colSpan={3} style={{ borderLeft: "none" }}>
              <TextUI ag={Ag["600_14"]} text="Всего:" color={ColorsUI.green} />
            </FooterCell>
            <FooterCell>
              <TextUI
                ag={Ag["600_14"]}
                text={`${totalPrice}₽`}
                color={ColorsUI.green}
              />
            </FooterCell>
          </tr>
        </tfoot>
      </Table>
    </Container>
  )
}

export const OrderListItem: React.FC<FinanceListItemProps> = ({
  info,
  finances,
  isOrder = false,
  goods = [],
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen)
  }

  const items: TableItem[] = goods.map((good) => ({
    _id: good._id,
    title: good.title,
    photo_list: good.photo_list,
    price: parseFloat(good.price.$numberDecimal),
    count: good.count,
  }))

  return (
    <>
      <ListItemUI>
        <MainContainer>
          <RowContainer $mb={10}>
            {isOrder ? (
              <>
                <TextUI
                  ag={Ag["400_16"]}
                  text={`Заказ №: ${
                    info.order_number ? info.order_number : "НЕ УКАЗАН"
                  } `}
                />
                <LineTextVertical />
                <TextUI
                  ag={Ag["400_16"]}
                  text={DateHelper.getFormatDateOfPoints(info.dateTime)}
                />
                <LineTextVertical />
                <TextUI
                  ag={Ag["400_16"]}
                  text={`Время: ${
                    info.time
                      ? `${info.time.hours}:${info.time.minutes}`
                      : "НЕ УКАЗАНО"
                  }`}
                />
                <LineTextVertical />
                <TextUI ag={Ag["400_16"]} text={`Магазин: ${info.storeName}`} />
              </>
            ) : (
              <TextUI
                ag={Ag["400_16"]}
                text={`Заказ №: ${
                  info.order_number ? info.order_number : "НЕ УКАЗАН"
                } `}
              />
            )}
            <LineTextVertical />
            <TextUI
              ag={Ag["400_16"]}
              text={`Покупатель: ${info.phone_number}`}
            />
            <LineTextVertical />
            <TextUI
              ag={Ag["400_16"]}
              text={`Стоимость: ${finances.payAmount}`}
            />
          </RowContainer>
        </MainContainer>

        <RowContainer $ml={50}>
          <MainContainer $mr={15} $width={170}>
            <ButtonUI $backColor={"border"} onClick={handleModalToggle}>
              <TextUI ag={Ag["400_16"]} text={"Подробнее"} />
            </ButtonUI>
          </MainContainer>
        </RowContainer>
      </ListItemUI>

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        headerText="Заказ"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            padding: "5px",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "7px",
                }}
              >
                <TextUI
                  ag={Ag["400_16"]}
                  text={`Заказ №: ${info.order_number || "НЕ УКАЗАН"}`}
                  color="#213F50"
                />
                <TextUI
                  ag={Ag["400_16"]}
                  text={`Дата: ${DateHelper.getFormatDateOfPoints(
                    info.dateTime,
                  )}`}
                  color="#213F50"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "7px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <TextUI
                    ag={Ag["600_16"]}
                    text="Продавец:"
                    color="#213F50"
                    mr={8}
                  />
                  <TextUI
                    ag={Ag["400_16"]}
                    text={info.storeName}
                    color="#213F50"
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <TextUI
                    ag={Ag["600_16"]}
                    text="Покупатель:"
                    color="#213F50"
                    mr={8}
                  />
                  <TextUI
                    ag={Ag["400_16"]}
                    text={info.phone_number}
                    color="#213F50"
                  />
                </div>
              </div>
            </div>
            <OrderTable items={items} />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "18px",
            }}
          >
            <button
              style={{
                backgroundColor: "white",
                color: "#213F50",
                border: "1px solid #213F50",
                padding: "9px 46px",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
              }}
              onClick={handleModalToggle}
            >
              <TextUI ag={Ag["400_16"]} text="Закрыть" color="#213F50" />
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}

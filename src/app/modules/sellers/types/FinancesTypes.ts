export interface FinanceStatistics {
  allAmount: number
  payAmount: number
  income: number
  deliveryAmount: number
  paymentCard: string
  comission: {
    percent: number
    promo: number
  }
}

export interface FinancesSellers {
  seller: FinanceSellerUnit
  finance: FinanceStatistics
  store: FinanceStore
}

export interface FinancesOrdersSeller {
  info: FinanceSellerUnit
  finance: FinanceStatistics
}

export interface FinanceSellerUnit {
  _id?: string
  order_number?: string
  ip?: string
  time?: object
  phone_number: string
  storeName: string
  orderID?: string
  dateTime?: string
}

export interface FinanceStore {
  _id?: string
  city: string
  order_number?: string
  ip?: string
  phone_number: string
  storeName: string
  sellerName: string
}

export type TFinanceDTO = {
  startDate: string
  endDate: string
  sellerId?: string
}

export interface OrderItem {
  _id: string
  category_id?: string
  subcategory_id?: string | null
  is_promoted?: boolean
  title: string
  photo_list: string[]
  count: number
  time_to_get_ready: string
  store_id: string
  seller_user_id: string
  short_description: string
  price: Price
}

export interface Price {
  $numberDecimal: string
}

// export interface SingleOrderResponse {
//   _id: string
//   title: string
//   comment?: string | null
//   goods: OrderItem[]
//   goods_ids: string[]
//   count: OrderItemCount[]
//   delivery_city: string
//   delivery_address: string
//   delivery_date: string
//   delivery_time: string
//   delivery_price: Price
//   full_amount: Price
//   income: Price
//   paid: boolean
//   paidByAdmin: boolean
//   paymentCard: string
//   postcard?: string | null
//   status_id?: string | null
//   store_id: FinanceStore
//   user_id: FinanceSellerUnit
//   creationDate: string
//   commission_percentage?: number
//   phone_number: string
// }

export interface OrderItemCount {
  title: string
  price: number
  count: number
  day: string
  time: string
  address: string
  addressAll: string
  city: string
  delivery_price: number
  name: string
}

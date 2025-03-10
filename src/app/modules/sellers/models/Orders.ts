import AbstractModel from "../../../settings/abstrcations/models/AbstractModel"
import { Nullable } from "../../../settings/types/BaseTypes"

export class Orders extends AbstractModel {
  _id: string = ""
  goods_ids: string[] = []
  title: string = ""
  comment: Nullable<string> = null
  commission_percentage: number = 0
  count: Array<{
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
  }> = []
  creationDate: Nullable<string> = null
  delivery_address: Nullable<string> = null
  delivery_city: Nullable<string> = null
  delivery_date: Nullable<string> = null
  delivery_time: Nullable<string> = null
  delivery_price: Nullable<number> = null
  full_amount: Nullable<number> = null
  income: Nullable<number> = null
  name: Nullable<string> = null
  paid: boolean = false
  paidByAdmin: boolean = false
  paymentCard: Nullable<string> = null
  phone_number: Nullable<string> = null
  postcard: Nullable<string> = null
  status_id: Nullable<string> = null
  store_id: {
    _id: string
    seller_user_id: string
    title: string
    subscription_status: boolean
    subscription_count: number
    subscription_until: string
    logo_url: string
    about_store: Nullable<string>
    categories_ids: string[]
    sub_categories_ids: string[]
    is_disabled: boolean
    comission: number
    lat: string
    lon: string
    address: string
    city: string
    weekdays: {
      from: string
      to: string
      not_working: boolean
    }
    weekends: {
      not_working: boolean
    }
    distance: Nullable<number>
  } = {
    _id: "",
    seller_user_id: "",
    title: "",
    subscription_status: false,
    subscription_count: 0,
    subscription_until: "",
    logo_url: "",
    about_store: null,
    categories_ids: [],
    sub_categories_ids: [],
    is_disabled: false,
    comission: 0,
    lat: "",
    lon: "",
    address: "",
    city: "",
    weekdays: {
      from: "",
      to: "",
      not_working: false,
    },
    weekends: {
      not_working: true,
    },
    distance: null,
  }
  user_id: {
    _id: string
    phone_number: string
    address: Nullable<string>
    city: Nullable<string>
    full_name: Nullable<string>
  } = {
    _id: "",
    phone_number: "",
    address: null,
    city: null,
    full_name: null,
  }
  goods: Array<{
    _id: string
    category_id: string
    is_promoted: boolean
    title: string
    photo_list: string[]
    count: number
    time_to_get_ready: string
    store_id: string
    seller_user_id: string
    short_description: string
    price: number
    isGettingReady: boolean
  }> = []

  constructor(props: any) {
    super()
    this.load(props)
  }
}

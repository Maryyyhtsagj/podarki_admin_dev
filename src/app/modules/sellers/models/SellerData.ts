import { Seller } from "./Seller"
import AbstractModel from "../../../settings/abstrcations/models/AbstractModel"
import { Nullable } from "../../../settings/types/BaseTypes"

export class SellerData extends AbstractModel {
  sellerData: Nullable<Seller> = null
  shopsCount: number = 0

  constructor(props: any) {
    super()
    this.load(props)
  }
}

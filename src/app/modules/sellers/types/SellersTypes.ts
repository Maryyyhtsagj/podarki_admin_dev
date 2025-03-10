import {
  FinanceStatistics,
  FinancesOrdersSeller,
  FinancesSellers,
} from "./FinancesTypes"
import { SellerData } from "./../models/SellerData"
import { Nullable } from "../../../settings/types/BaseTypes"
import { TClaimDenytForm } from "../form/ClaimDenyForm"
import { Seller } from "../models/Seller"
import { Orders } from "../models/Orders"

export type TSellersState = {
  claimDenyForm: TClaimDenytForm
  isClaimsLoad: "completed" | "load" | "failed"
  isSellersLoad: "completed" | "load" | "failed"
  isUpdateLoad: "completed" | "load" | "failed"
  isFinancesLoad: "completed" | "load" | "failed"
  isOrdersStatusChanged: "completed" | "load" | "failed"
  claimsList: Seller[]
  claimsListPending: Seller[]
  claimsListDeny: Seller[]
  currentClaim: Nullable<Seller>

  sellersList: Seller[]
  ordersList: Orders[]
  currentSeller: Nullable<SellerData>
  currentOrder: Nullable<Orders>

  financesList: FinancesSellers[]
  financeStats: Nullable<FinanceStatistics>
  financesOrdersList: FinancesOrdersSeller[]
  financeOrderStats: Nullable<FinanceStatistics>
}

export type TClaimDTO = {
  seller_user_id: string
  message_from_admin?: string
}

export type TBanSellerDTO = {
  seller_id: string
  ban: boolean
}

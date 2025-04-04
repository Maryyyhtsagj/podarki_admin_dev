import { TBanSellerDTO, TClaimDTO } from "../types/SellersTypes"
import AbstractServiceRepository from "../../../settings/abstrcations/repositories/AbstractServiceRepository"
import { ResponseMessage } from "../models/ResponseMessage"
import { ApiSellerService } from "./api/ApiSellerService"
import { SellersTabMenuType } from "../../../pages/sellers/types/SellersUITypes"
import { Seller } from "../models/Seller"
import { SellerData } from "../models/SellerData"
import { TFinanceDTO } from "../types/FinancesTypes"
import { Finances } from "../models/Finances"
import { FinancesOrders } from "../models/FinancesOrders"
import { Orders } from "../models/Orders"

export class SellersService extends AbstractServiceRepository {
  private apiService: ApiSellerService

  constructor() {
    super()
    this.apiService = new ApiSellerService()
  }

  getClaims = async () => {
    const { data } = await this.apiService.getClaims()

    return this.createList<Seller>(Seller, data)
  }

  getSellers = async () => {
    const { data } = await this.apiService.getSellers()

    return this.createList<Seller>(Seller, data)
  }

  getCurrentClaim = async (id: string) => {
    const { data } = await this.apiService.getCurrentClaim(id)

    return this.create<SellerData>(SellerData, data)
  }

  getCurrentSeller = async (id: string) => {
    const { data } = await this.apiService.getCurrentSeller(id)

    return this.create<SellerData>(SellerData, data)
  }

  putApproveSeller = async (dto: TClaimDTO) => {
    const { data } = await this.apiService.putApproveSeller(dto)

    return this.create<ResponseMessage>(ResponseMessage, data)
  }

  putDenySeller = async (dto: TClaimDTO) => {
    const { data } = await this.apiService.putDenySeller(dto)

    return this.create<ResponseMessage>(ResponseMessage, data)
  }

  putBanedSeller = async (dto: TBanSellerDTO) => {
    const { data } = await this.apiService.putBanedSeller(dto)

    return this.create<ResponseMessage>(ResponseMessage, data)
  }
  ordersChangeStatus = async (id: string) => {
    const { data } = await this.apiService.ordersChangeStatus(id)

    return data
  }

  getTypeList = (sellerList: Seller[], type: SellersTabMenuType) => {
    switch (type) {
      case SellersTabMenuType.pending:
        return sellerList.filter(
          (seller) => seller.status === SellersTabMenuType.pending,
        )
      case SellersTabMenuType.denied:
        return sellerList.filter(
          (seller) => seller.status === SellersTabMenuType.denied,
        )
      default:
        return sellerList
    }
  }

  getFinances = async (dto: TFinanceDTO) => {
    const { data } = await this.apiService.getFinances(dto)

    return this.create<Finances>(Finances, data)
  }

  getOrders = async (dto: TFinanceDTO) => {
    const { data } = await this.apiService.getOrders(dto)
    return this.create<FinancesOrders>(FinancesOrders, data)
  }

  // getSingleOrder = async (id: string) => {
  //   const { data: orderData } = await this.apiService.getSingleOrder(id) // Destructure data
  //   return this.create<Orders>(Orders, orderData) // Use the actual order data
  // }

  postPayment = async (value: number) => {
    const { data } = await this.apiService.postPayment(value)

    return data
  }
}

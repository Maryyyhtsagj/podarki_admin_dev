import { CreatePromocodeDTO } from "./../types/PromocodesTypes"
import AbstractServiceRepository from "../../../settings/abstrcations/repositories/AbstractServiceRepository"
import { Promocode } from "../models/Promocode"
import { ApiPromocodesService } from "./api/ApiPromocodesService"

export class PromocodesService extends AbstractServiceRepository {
  api: ApiPromocodesService

  constructor() {
    super()
    this.api = new ApiPromocodesService()
  }

  getPromocodes = async () => {
    const { data } = await this.api.getPromocodes()

    return this.createList<Promocode>(Promocode, data)
  }

  deletePromocode = async (id: string) => {
    const { data } = await this.api.deletePromocode(id)

    return data
  }

  createPromocode = async (dto: CreatePromocodeDTO) => {
    const { data } = await this.api.createPromocode(dto)

    return this.create<Promocode>(Promocode, data)
  }
}

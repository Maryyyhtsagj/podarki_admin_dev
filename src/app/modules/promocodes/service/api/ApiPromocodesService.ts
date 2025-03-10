import AbstractApiRepository from "../../../../settings/abstrcations/repositories/AbstractApiRepository"
import { CreatePromocodeDTO } from "../../types/PromocodesTypes"

export class ApiPromocodesService extends AbstractApiRepository {
  getPromocodes = () => {
    return this.apiClient.get({
      url: "api/promocodes",
    })
  }

  deletePromocode = (id: string) => {
    return this.apiClient.delete({
      url: `api/promocodes/?id=${id}`,
    })
  }

  createPromocode = (dto: CreatePromocodeDTO) => {
    return this.apiClient.post({
      url: "api/promocodes/admin",
      data: dto,
    })
  }
}

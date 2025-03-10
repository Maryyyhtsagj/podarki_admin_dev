import { TAuthDTO } from "../../types/AuthTypes"
import AbstractApiRepository from "../../../../settings/abstrcations/repositories/AbstractApiRepository"

export class ApiAuthService extends AbstractApiRepository {
  login = async (dto: TAuthDTO) => {
    return this.apiClient.post({
      url: "api/users/login/admin",
      data: dto,
    })
  }
}

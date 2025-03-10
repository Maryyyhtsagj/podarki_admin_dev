import { TAuthDTO } from "./../types/AuthTypes"
import AbstractServiceRepository from "../../../settings/abstrcations/repositories/AbstractServiceRepository"
import { ApiAuthService } from "./api/ApiAuthService"
import { AuthUser } from "../models/AuthUser"

export class AuthService extends AbstractServiceRepository {
  private apiService: ApiAuthService

  constructor() {
    super()
    this.apiService = new ApiAuthService()
  }

  login = async (dto: TAuthDTO) => {
    const { data } = await this.apiService.login(dto)

    return this.create<AuthUser>(AuthUser, data)
  }
}

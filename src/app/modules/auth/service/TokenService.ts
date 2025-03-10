import AbstractServiceRepository from "../../../settings/abstrcations/repositories/AbstractServiceRepository"

import { KeyLocalStorage } from "../../../settings/types/KeyLocalStorage"
import { AuthUser } from "../models/AuthUser"
import ApiTokenService from "./api/ApiTokenService"

export class TokenService extends AbstractServiceRepository {
  private apiService: ApiTokenService

  constructor() {
    super()
    this.apiService = new ApiTokenService()
  }

  getLocalStorageToken = () => {
    const token = localStorage.getItem(KeyLocalStorage.token)

    if (token) {
      this.setBearerToken(token)

      return this.create<AuthUser>(AuthUser, { token })
    }
  }

  setBearerToken = (token: string) => {
    this.apiService.setAccessToken(token)
  }

  logout = () => {
    this.apiService.clearAccessToken()
    localStorage.clear()
  }
}

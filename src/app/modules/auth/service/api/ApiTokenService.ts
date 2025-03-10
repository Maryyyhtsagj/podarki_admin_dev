import AbstractApiRepository from "../../../../settings/abstrcations/repositories/AbstractApiRepository"

export default class ApiTokenService extends AbstractApiRepository {
  setAccessToken = (token: string) => {
    this.apiClient.setAccessToken(token)
  }

  clearAccessToken = () => {
    this.apiClient.clearAccessToken()
  }
}

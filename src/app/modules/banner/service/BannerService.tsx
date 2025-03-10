import AbstractServiceRepository from "../../../settings/abstrcations/repositories/AbstractServiceRepository"
import { Banner } from "../models/Banner"
import { ApiBannerService } from "./api/ApiBannerServcie"

export class BannerService extends AbstractServiceRepository {
  api: ApiBannerService

  constructor() {
    super()
    this.api = new ApiBannerService()
  }
  postBanner = async (image: string) => {
    try {
      const response = await this.api.postBanner(image)
      console.log(response)
    } catch (error) {
      console.error("Error uploading image:", error)
      throw error
    }
  }

  getBanner = async () => {
    const { data } = await this.api.getBanner()

    return this.createList<Banner>(Banner, data)
  }
  deleteBanner = async (banner_id: string) => {
    const { data } = await this.api.deleteBanner(banner_id)

    return data
  }
}

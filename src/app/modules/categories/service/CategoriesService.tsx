import { MockCategoriesList } from "../../../pages/categories/mocks/MockCategoriesList"
import AbstractServiceRepository from "../../../settings/abstrcations/repositories/AbstractServiceRepository"
import { Category } from "../models/Category"
import { CreateCategoryDTO } from "../types/CategoriesTypes"
import { ApiCategoriesService } from "./api/ApiCategoriesService"

export class CategoriesService extends AbstractServiceRepository {
  api: ApiCategoriesService

  constructor() {
    super()
    this.api = new ApiCategoriesService()
  }

  getCategories = async () => {
    const { data } = await this.api.getCategories()

    return this.createList<Category>(Category, data)
  }
  deleteCategory = async (id: string) => {
    const { data } = await this.api.deleteCategory(id)
    return data
  }
  postCategory = async (dto: CreateCategoryDTO) => {
    const { data } = await this.api.postCategory(dto)
    return data
  }
}

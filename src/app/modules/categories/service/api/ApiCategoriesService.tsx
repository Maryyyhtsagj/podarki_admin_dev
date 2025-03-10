import AbstractApiRepository from "../../../../settings/abstrcations/repositories/AbstractApiRepository"
import { CreateCategoryDTO } from "../../types/CategoriesTypes"

export class ApiCategoriesService extends AbstractApiRepository {
  getCategories = () => {
    return this.apiClient.get({
      url: "api/categories/admin",
    })
  }
  deleteCategory = (id: string) => {
    let token = localStorage.getItem("token")

    return this.apiClient.post({
      url: `api/categories/delete?id=${id}`,
      config: {
        headers: {
          "Content-Type": `application/json`,
          Authorization: `Bearer ${token}`,
        },
      },
    })
  }
  postCategory = async (dto: CreateCategoryDTO) => {
    const formData = new FormData()
    let token = localStorage.getItem("token")
    formData.append("title", dto.title)
    formData.append("photo_url", dto.photo_url)
    return this.apiClient.post({
      url: `api/categories/`,
      data: formData,
      config: {
        headers: {
          "Content-Type": `multipart/form-data;`,
          Authorization: `Bearer ${token}`,
        },
      },
    })
  }
}

import { Category } from "../models/Category"

export interface SubCategoryModel {
  subcatId: string
  subcatTitle: string
  isActive: boolean
}

export interface CategoriesStateModel {
  isLoadCats: "completed" | "load" | "failed"
  isUpdateCars: "completed" | "load" | "failed"

  categoriesList: Category[]
}

export interface UpdateCategoryDTO {
  id: string
  isActive: boolean
}
export interface CreateCategoryDTO {
  title: string
  photo_url: File
}

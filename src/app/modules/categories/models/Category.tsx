import AbstractModel from "../../../settings/abstrcations/models/AbstractModel"
import { SubCategoryModel } from "../types/CategoriesTypes"

export class Category extends AbstractModel {
  catId: string = ""
  catTitle: string = ""
  isActive: boolean = false
  subcats: SubCategoryModel[] = []

  constructor(props: any) {
    super()
    this.load(props)
  }
}

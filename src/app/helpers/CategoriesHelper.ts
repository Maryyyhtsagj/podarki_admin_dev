import { Category } from "../modules/categories/models/Category"
import {
  SubCategoryModel,
  UpdateCategoryDTO,
} from "../modules/categories/types/CategoriesTypes"

type CompareListProps = {
  originalList: Category[]
  modifiedList: Category[]
}

export class CategoriesHelper {
  static setDefaultList = (list: Category[]) => {
    const tempCat: any[] = list.map((item) => {
      const tempSubCat: SubCategoryModel[] = item.subcats.map((subcat) => {
        return {
          subcatId: subcat.subcatId,
          isActive: subcat.isActive,
          subcatTitle: subcat.subcatTitle,
        }
      })

      return {
        catId: item.catId,
        catTitle: item.catTitle,
        isActive: item.isActive,
        subcats: tempSubCat,
      }
    })

    return tempCat as Category[]
  }

  static getCats = (list: Category[], catId: string, subCatId?: string) => {
    return list.map((item) => {
      let checkSubcat = !item.isActive
      if (item.catId === catId) {
        if (subCatId) {
          item.subcats = item.subcats.map((subCat) => {
            if (subCat.subcatId === subCatId) {
              subCat.isActive = !subCat.isActive
            }
            return subCat
          })
          checkSubcat =
            item.subcats.filter((subCat) => subCat.isActive).length > 0
        } else {
          item.subcats = item.subcats.map((subcat) => {
            return { ...subcat, isActive: checkSubcat }
          })
        }
        item.isActive = checkSubcat
      }
      return item
    })
  }

  static compareList = (props: CompareListProps): UpdateCategoryDTO[] => {
    const { originalList, modifiedList } = props

    let resultList: UpdateCategoryDTO[] = []

    originalList.forEach((origCat) => {
      const modifCat = modifiedList.find((cat) => cat.catId === origCat.catId)

      if (!modifCat) return

      if (modifCat.isActive !== origCat.isActive) {
        resultList = [
          ...resultList,
          { id: modifCat.catId, isActive: modifCat.isActive },
        ]
      }

      origCat.subcats.forEach((origSubCat) => {
        const modifSubCat = modifCat.subcats.find(
          (subCat) => subCat.subcatId === origSubCat.subcatId,
        )

        if (!modifSubCat) return

        if (modifSubCat?.isActive !== origSubCat.isActive) {
          resultList = [
            ...resultList,
            {
              id: modifSubCat.subcatId,
              isActive: modifSubCat.isActive,
            },
          ]
        }
      })
    })

    return resultList
  }
}

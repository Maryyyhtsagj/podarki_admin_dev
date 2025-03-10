import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { CategoriesService } from "./service/CategoriesService"
import {
  CategoriesStateModel,
  CreateCategoryDTO,
} from "./types/CategoriesTypes"
import { RootState } from "../../settings/redux/store"
import toast from "react-hot-toast"

const categoriesService = new CategoriesService()

const initialState: CategoriesStateModel = {
  isLoadCats: "completed",
  isUpdateCars: "completed",

  categoriesList: [],
}

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET Categories

      .addCase(getCategories.pending, (state) => {
        state.isLoadCats = "load"
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoadCats = "completed"

        state.categoriesList = action.payload
      })
      .addCase(getCategories.rejected, (state) => {
        state.isLoadCats = "failed"
      })
      .addCase(postCategory.pending, (state) => {
        state.isLoadCats = "load"
      })
      .addCase(postCategory.fulfilled, (state, action) => {
        state.isUpdateCars = "completed"
        toast.success("Успешно")
      })
      .addCase(postCategory.rejected, (state) => {
        state.isUpdateCars = "failed"
      })
  },
})

export const getCategories = createAsyncThunk("categories/list", async () => {
  const catsList = await categoriesService.getCategories()

  return catsList
})
export const deleteCategory = createAsyncThunk(
  "categories/delete",
  async (id: string) => {
    const data = await categoriesService.deleteCategory(id)

    return data
  },
)
export const postCategory = createAsyncThunk(
  "categories/post",
  async (dto: CreateCategoryDTO, _) => {
    const category = await categoriesService.postCategory(dto)

    return category
  },
)

export const selectCatsValues = (state: RootState) => state.categoriesSlice

export default categoriesSlice.reducer

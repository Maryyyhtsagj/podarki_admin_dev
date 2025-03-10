import { RootState } from "./../../settings/redux/store"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { PromocodesService } from "./service/PromocodesService"
import {
  CreatePromocodeDTO,
  PromocodeStateModel,
} from "./types/PromocodesTypes"

const promocodeService = new PromocodesService()

const initialState: PromocodeStateModel = {
  isPromocodeLoad: "completed",
  isPromocodeUpdate: "completed",
  promocodesList: [],
}

const promocodeSlice = createSlice({
  name: "promocodes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET Promocodes

      .addCase(getPromocodes.pending, (state) => {
        state.isPromocodeLoad = "load"
      })
      .addCase(getPromocodes.fulfilled, (state, action) => {
        state.isPromocodeLoad = "completed"
        state.promocodesList = action.payload
      })
      .addCase(getPromocodes.rejected, (state) => {
        state.isPromocodeLoad = "completed"
      })
  },
})

export const getPromocodes = createAsyncThunk("promocodes/list", async () => {
  const promocodes = await promocodeService.getPromocodes()

  return promocodes
})

export const createPromocode = createAsyncThunk(
  "promocodes/create",
  async (dto: CreatePromocodeDTO) => {
    const promocode = await promocodeService.createPromocode(dto)

    return promocode
  },
)

export const deletePromocode = createAsyncThunk(
  "promocodes/delete",
  async (id: string) => {
    const promocode = await promocodeService.deletePromocode(id)

    return promocode
  },
)

export const selectPromocodesValues = (state: RootState) =>
  state.promocodesSlice

export default promocodeSlice.reducer

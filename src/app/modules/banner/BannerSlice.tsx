import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { BannerService } from "./service/BannerService"
import { RootState } from "../../settings/redux/store"
import { BannerDTO } from "./types/ bannerTypes"
import { Banner } from "./models/Banner"
import { act } from "react-dom/test-utils"
import { TokenService } from "../auth/service/TokenService"

const bannerService = new BannerService()

const initialState = {
  isPostedBanner: false,
  isPostedBannerStatus: "idle",
  deleteBannerStatus: "idle",
  getBannerStatus: "idle",

  banner: [] as Banner[],
}

export const BannerSlice = createSlice({
  name: "Banner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postBanner.fulfilled, (state, action) => {
        state.isPostedBanner = true
        state.isPostedBannerStatus = action.payload
      })
      .addCase(postBanner.rejected, (state) => {
        state.isPostedBannerStatus = "failed"
      })

      .addCase(getBanner.fulfilled, (state, action) => {
        state.getBannerStatus = "completed"
        state.banner = action.payload as Banner[]
      })
      .addCase(getBanner.rejected, (state) => {
        state.getBannerStatus = "failed"
      })
      .addCase(deleteBanner.rejected, (state) => {
        state.deleteBannerStatus = "failed"
      })
      .addCase(deleteBanner.fulfilled, (state, action) => {
        state.deleteBannerStatus = action.payload
      })
  },
})

export const postBanner = createAsyncThunk(
  "Banner/post",
  async (image: string) => {
    const Banner = await bannerService.postBanner(image)

    return Banner
  },
)

export const deleteBanner = createAsyncThunk(
  "Banner/delete",
  async (banner_id: string) => {
    const deleteBanner = await bannerService.deleteBanner(banner_id)

    return deleteBanner
  },
)

export const getBanner = createAsyncThunk("Banner/get", async () => {
  const Banner = await bannerService.getBanner()

  return Banner
})

export const selectBannerValues = (state: RootState) => state.BannerSlice

export default BannerSlice.reducer

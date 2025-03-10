import { useState, useRef, useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../../settings/redux/hooks"
import { ColumnContainerFlex } from "../../../template/containers/ColumnContainer"
import { RowContainerBeetwen } from "../../../template/containers/RowContainer"
import { ColorsUI } from "../../../template/styles/ColorUI"
import { ButtonUI } from "../../../template/ui/ButtonUI"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { BannerUI } from "../ui/BannerUI"
import {
  deleteBanner,
  getBanner,
  postBanner,
  selectBannerValues,
} from "../../../modules/banner/BannerSlice"
import axios from "axios"

export const CategoriesBanner = () => {
  const { banner } = useAppSelector(selectBannerValues)
  const dispatch = useAppDispatch()

  const lastBannerImage = banner[banner.length - 1]?.url
  const bannerId = banner[banner.length - 1]?._id

  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [previewImage, setPreviewImage] = useState<string | null>(lastBannerImage || null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedImage(file)
      setPreviewImage(URL.createObjectURL(file)) // Temporary preview of the selected image
    }
  }

  const handleDelete = async (banner_id: string) => {
    try {
      await dispatch(deleteBanner(banner_id)).unwrap()
      dispatch(getBanner()) // Refresh the banner list
      setPreviewImage(null) // Reset the preview image
    } catch (error) {
      console.error("Error deleting banner:", error)
    }
  }

  const handleUpload = async () => {
    try {
      if (!selectedImage) {
        console.error("No image selected")
        return
      }

      const formData = new FormData()
      formData.append("file", selectedImage)

      const token = localStorage.getItem("token")

      const response = await axios.post(
        "http://79.174.80.241:3001/api/users/admin/upload-image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      )

      const imageUrl = response.data // Assuming this is the uploaded image URL
      await dispatch(postBanner(imageUrl)).unwrap()
      dispatch(getBanner()) // Refresh the banner list
      setSelectedImage(null)
    } catch (error) {
      console.error("Error uploading image:", error)
    }
  }

  useEffect(() => {
    dispatch(getBanner())
  }, [dispatch])

  return (
    <ColumnContainerFlex $pt={30}>
      <TextUI mb={10} ag={Ag["500_14"]} text={"Текущий баннер"} />
      <BannerUI $mb={20}>
        <div
          className="img"
          style={{
            backgroundImage: previewImage ? `url(${previewImage})` : null,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            cursor: "pointer",
            backgroundColor: previewImage ? null : ColorsUI.text2,
          }}
        >
          <input
            type="file"
            style={{
              cursor: "pointer",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              opacity: 0,
            }}
            onChange={handleImageChange}
          />
        </div>
      </BannerUI>
      <RowContainerBeetwen>
        <ButtonUI
          onClick={() => handleDelete(bannerId)}
          $mr={10}
          $backColor={"red"}
        >
          <TextUI color={ColorsUI.white} ag={Ag["600_16"]} text={"Удалить"} />
        </ButtonUI>
        <ButtonUI onClick={() => handleUpload()}>
          <TextUI color={ColorsUI.white} ag={Ag["600_16"]} text={"Загрузить"} />
        </ButtonUI>
      </RowContainerBeetwen>
    </ColumnContainerFlex>
  )
}

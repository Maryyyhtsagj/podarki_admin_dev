// @ts-nocheck

import React, { useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../settings/redux/hooks"
import {
  getCategories,
  postCategory,
  selectCatsValues,
} from "../../../modules/categories/CategoriesSlice"
import { Category } from "../../../modules/categories/models/Category"
import { ColumnContainerFlex } from "../../../template/containers/ColumnContainer"
import { CheckboxUI } from "../../../template/ui/CheckboxUI"
import { RowContainer } from "../../../template/containers/RowContainer"
import { DownIconSVG } from "../../../template/svg/DownIconSVG"
import { MainContainer } from "../../../template/containers/MainContainer"
import { ScrollContent } from "../../../components/ScrollContent"
import { CategoriesHelper } from "../../../helpers/CategoriesHelper"
import { ButtonUI } from "../../../template/ui/ButtonUI"
import { Ag, TextUI } from "../../../template/ui/TextUI"
import { ColorsUI } from "../../../template/styles/ColorUI"
import { EmptyList } from "../../../components/EmptyList"
import { InputUnderline } from "../../../components/InputUnderline"
import toast from "react-hot-toast"
import { BannerUI } from "../ui/BannerUI"
import { selectBannerValues } from "../../../modules/banner/BannerSlice"
import axios from "axios"
import { CreateCategoryDTO } from "../../../modules/categories/types/CategoriesTypes"

export const CategoriesList = () => {
  const { categoriesList } = useAppSelector(selectCatsValues)
  const [myTitle, setmyTitle] = useState("")
  const [myImage, setMyImage] = useState(null)

  const handleTitleChange = (e) => {
    setmyTitle(e.target.value)
  }

  const handleImageChange = (e) => {
    setMyImage(e.target.files[0])
  }
  const dispatch = useAppDispatch()

  const load = useRef(true)

  const [list, setList] = useState<Category[]>([])

  useEffect(() => {
    if (load.current) {
      dispatch(getCategories())
    }

    load.current = false
  }, [])

  useEffect(() => {
    if (categoriesList.length) {
      setList(CategoriesHelper.setDefaultList(categoriesList))
    }
  }, [categoriesList])

  const handleChangeCat = (catId: string, subCatId?: string) => {
    setList(CategoriesHelper.getCats(list, catId, subCatId))
  }
  const handleCreateCategory = async () => {
    try {
      const formData = new FormData()
      formData.append("title", myTitle)
      formData.append("photo_url", myImage)

      const token = localStorage.getItem("token")

      const response = await axios.post(
        "http://79.174.80.241:3001/api/categories/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        },
      )
      dispatch(getCategories())
      toast.success("Category created successfully!")
    } catch (error) {
      console.error("Error uploading image:", error)
      toast.error("Failed to create category.")
    }
  }

  return (
    <ColumnContainerFlex $isRelative>
      <MainContainer $mt={20}>
        <TextUI mb={15} ag={Ag["500_14"]} text={"Категория"} />
        <InputUnderline
          $mb={40}
          $pl={0}
          placeholder={"Напишите название категории"}
          value={myTitle}
          onChange={handleTitleChange}
        />
        <BannerUI $mb={20}>
          <div
            className="img"
            style={{
              backgroundImage: myImage
                ? `url(${URL.createObjectURL(myImage)})`
                : null,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              cursor: "pointer",
              backgroundColor: ColorsUI.text2,
            }}
          >
            <input
              type="file"
              onChange={handleImageChange}
              style={{
                cursor: "pointer",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                opacity: 0,
              }}
            />
          </div>
        </BannerUI>
        <ButtonUI
          onClick={() => handleCreateCategory()}
          disabled={!myTitle || !myImage}
        >
          <TextUI color={ColorsUI.white} ag={Ag["600_16"]} text={"Создать"} />
        </ButtonUI>
      </MainContainer>

      <ScrollContent>
        <MainContainer $pt={30} $mb={45}>
          {list.map((cat) => (
            <MainContainer $mb={17} key={cat.catId}>
              <RowContainer>
                <MainContainer $width={180} $mr={10}>
                  <CheckboxUI
                    id={cat.catId}
                    checked={cat.isActive}
                    text={cat.catTitle}
                    onChange={() => handleChangeCat(cat.catId)}
                  />
                </MainContainer>

                {cat.subcats.length ? <DownIconSVG /> : null}
              </RowContainer>

              <MainContainer $mb={cat.subcats.length ? 16 : 0}>
                {cat.subcats.map((subCat) => (
                  <MainContainer $pt={12} $pl={32} key={subCat.subcatId}>
                    <CheckboxUI
                      id={subCat.catId}
                      checked={subCat.isActive}
                      text={subCat.subcatTitle}
                      onChange={() =>
                        handleChangeCat(cat.catId, subCat.subcatId)
                      }
                    />
                  </MainContainer>
                ))}
              </MainContainer>
            </MainContainer>
          ))}
        </MainContainer>
      </ScrollContent>
    </ColumnContainerFlex>
  )
}

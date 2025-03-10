import {
  CenterContainer,
  CenterContainerFlex,
} from "../../template/containers/CenterContainer"
import { AuthGiftImage } from "./ui/AuthGiftImage"
import {
  AuthEllipseBottom,
  AuthEllipseTop,
  AuthHorizontalLine,
  AuthVerticalLine,
  AuthWhiteLine,
} from "./ui/AuthFigures"
import { AuthImage, AuthLogo } from "./ui/AuthContainers"
import { LogoSVG } from "../../template/svg/LogoSVG"
import { AuthForm } from "./ui/AuthForm"
import { ColorsUI } from "../../template/styles/ColorUI"
import { RowContainer } from "../../template/containers/RowContainer"
import { AuthGiftSVG } from "./ui/AuthGiftSVG"
import { StyleProp } from "../../settings/types/BaseTypes"
import { InputUnderline } from "../../components/InputUnderline"
import { ButtonUI, getButtonTextColor } from "../../template/ui/ButtonUI"
import { useAppDispatch, useAppSelector } from "../../settings/redux/hooks"
import {
  authChangeForm,
  login,
  resetForm,
  selectAuthValues,
} from "../../modules/auth/AuthSlice"
import { AuthFormKeys } from "../../modules/auth/form/AuthForm"
import { Ag, TextUI } from "../../template/ui/TextUI"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
//@ts-ignore
import GiftImg from "./../../../assets/img/gift.png"

export const AuthPage = () => {
  const { authForm, isAuthLoad, authUser } = useAppSelector(selectAuthValues)

  const dispatch = useAppDispatch()

  const navigation = useNavigate()

  const handleLogin = () => {
    dispatch(login(authForm))
  }

  useEffect(() => {
    return () => {
      dispatch(resetForm())
    }
  }, [])

  useEffect(() => {
    if (authUser?.token) {
      navigation("/")
    }
  }, [authUser])

  return (
    <CenterContainerFlex>
      <AuthVerticalLine />
      <AuthHorizontalLine />

      <CenterContainer style={styles.container}>
        <AuthImage>
          <AuthEllipseTop size={5} />
          <AuthEllipseBottom size={14} />
          <AuthGiftImage src={GiftImg} />
          <AuthWhiteLine />
        </AuthImage>

        <AuthLogo>
          <LogoSVG />
        </AuthLogo>

        <AuthForm>
          <CenterContainerFlex style={styles.containerForm}>
            <RowContainer $mb={50}>
              <div style={styles.icon}>
                <AuthGiftSVG />
              </div>
              <TextUI ag={Ag["500_18"]} text={"Войти в учетную запись"} />
            </RowContainer>

            <div style={styles.inputs}>
              <InputUnderline
                name={"email"}
                value={authForm.email}
                onChange={(e) => {
                  dispatch(
                    authChangeForm({
                      key: AuthFormKeys.email,
                      value: e.target.value,
                    }),
                  )
                }}
                $mb={35}
                placeholder={"Email"}
              />
              <InputUnderline
                type={"password"}
                value={authForm.password}
                onChange={(e) => {
                  dispatch(
                    authChangeForm({
                      key: AuthFormKeys.password,
                      value: e.target.value,
                    }),
                  )
                }}
                $mb={50}
                placeholder={"Пароль"}
              />

              <ButtonUI
                onClick={handleLogin}
                disabled={
                  // !AuthFormValidation.isValidForm(authForm) ||
                  isAuthLoad === "load"
                }
                type={"button"}
              >
                <TextUI
                  ag={Ag["600_16"]}
                  color={getButtonTextColor("tiffany")}
                  text={"Войти"}
                />
              </ButtonUI>
            </div>
          </CenterContainerFlex>
        </AuthForm>
      </CenterContainer>
    </CenterContainerFlex>
  )
}

const styles: StyleProp = {
  container: {
    zIndex: 50,
  },
  containerForm: {
    backgroundColor: ColorsUI.white,
  },
  icon: {
    marginRight: 10,
  },
  inputs: {
    maxWidth: 274,
    minWidth: 120,
  },
}

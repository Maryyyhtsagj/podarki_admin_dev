import { ReactNode, useEffect } from "react"
import { selectToken } from "../../modules/auth/AuthSlice"
import { useAppSelector } from "../../settings/redux/hooks"
import { Outlet, useNavigate, useOutlet } from "react-router-dom"
import { RowContainerFlex } from "../../template/containers/RowContainer"
import { SideMenu } from "../../components/sideMenu/SideMenu"
import { PathApp } from "../path/PathApp"
import { RedirectUI } from "./ui/RedirectUI"

type RedirectPage = {
  element: ReactNode
}

export const RedirectApp = ({ element }: RedirectPage) => {
  const token = useAppSelector(selectToken)
  const checkOutlet = useOutlet()

  const navigation = useNavigate()

  useEffect(() => {
    if (!token) {
      navigation(PathApp.login.path)
    }
  }, [])

  if (!token) {
    return <></>
  }

  return (
    <RedirectUI>
      <SideMenu />
      {checkOutlet ? <Outlet /> : element}
    </RedirectUI>
  )
}

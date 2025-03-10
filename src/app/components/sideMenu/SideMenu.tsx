import { SideContainer } from "./ui/SideContainers"
import { SideLogoSVG } from "./ui/SideLogoSVG"
import { Ag, TextUI } from "../../template/ui/TextUI"
import { ColorsUI } from "../../template/styles/ColorUI"
import { RowContainerEnd } from "../../template/containers/RowContainer"
import { useLocation, useNavigate } from "react-router"
import { PathApp, TPathValue } from "../../routes/path/PathApp"
import { ColumnContainerBetweenFlex } from "../../template/containers/ColumnContainer"
import { SideLogout } from "./ui/SideLogout"
import { useAppDispatch } from "../../settings/redux/hooks"
import { logout } from "../../modules/auth/AuthSlice"
import { SideLink } from "./components/SideLink"

export const SideMenu = () => {
  const dispatch = useAppDispatch()

  const currentPath = useLocation().pathname
  const navigation = useNavigate()

  const handleNavigation = (to: TPathValue) => {
    navigation(to.path)
  }

  const handleLogout = () => {
    dispatch(logout())

    navigation(PathApp.login.path)
  }

  return (
    <SideContainer>
      <ColumnContainerBetweenFlex $pv={30}>
        <div>
          <RowContainerEnd $pr={10} $mb={35} $pl={45}>
            <SideLogoSVG />
            <TextUI
              isNoSelect
              color={ColorsUI.pink}
              ag={Ag["600_13"]}
              text={"Админ"}
            />
          </RowContainerEnd>
          {Object.entries(PathApp).map(([key, value], index) => {
            const nameRoute =
              index === 0 && currentPath !== value.path
                ? PathApp.seller.path
                : value.path

            if (value.menuName) {
              return (
                <SideLink
                  onNavigate={() => handleNavigation(value)}
                  isCurrentPath={currentPath.includes(nameRoute)}
                  isPending={index === 0}
                  linkText={value.menuName}
                  key={key}
                />
              )
            }
          })}
        </div>

        <SideLogout onClick={() => handleLogout()} $pl={45}>
          <TextUI isNoSelect ag={Ag["400_16"]} text={"Выйти"} />
        </SideLogout>
      </ColumnContainerBetweenFlex>
    </SideContainer>
  )
}

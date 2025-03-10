import { HeaderUI } from "../../components/HeaderUI"
import { DoubleSection } from "../../components/doubleSection/DoubleSection"
import { StyleProp } from "../../settings/types/BaseTypes"
import { CenterContainerFlex } from "../../template/containers/CenterContainer"
import { ColumnContainerFlex } from "../../template/containers/ColumnContainer"
import { Ag, TextUI } from "../../template/ui/TextUI"
import { CategoriesBanner } from "./components/CategoriesBanner"
import { CategoriesList } from "./components/CategoriesList"

export const CategoriesPage = () => {
  return (
    <ColumnContainerFlex style={styles.container}>
      <HeaderUI>
        <DoubleSection
          firstContent={
            <CenterContainerFlex>
              <TextUI ag={Ag["600_22"]} text={"Создать/удалить категории"} />
            </CenterContainerFlex>
          }
          secondContent={
            <CenterContainerFlex>
              <TextUI ag={Ag["600_22"]} text={"Акционный баннер"} />
            </CenterContainerFlex>
          }
          isNoMT={true}
        />
      </HeaderUI>

      <DoubleSection
        firstContent={<CategoriesList />}
        secondContent={<CategoriesBanner />}
        isNoMT={true}
      />
    </ColumnContainerFlex>
  )
}

const styles: StyleProp = {
  container: {
    height: "100%",
  },
}

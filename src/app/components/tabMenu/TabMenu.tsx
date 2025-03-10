import { RowContainer } from "../../template/containers/RowContainer"
import { Tab } from "./ui/Tab"
import { CenterContainerFlex } from "../../template/containers/CenterContainer"
import { Ag, TextUI } from "../../template/ui/TextUI"
import { ColorsUI } from "../../template/styles/ColorUI"
import { NewPendingUI } from "../NewPendingUI"

type TabMenuProps = {
  tab: Object
  isNewLength: number
  isNewKey: string
  activeTab: string
  onChangeTab: (key: string) => void
}

export const TabMenu = (props: TabMenuProps) => {
  return (
    <RowContainer>
      {Object.entries(props.tab).map(([key, value]) => {
        return (
          <Tab
            onClick={() => props.onChangeTab(key)}
            key={key}
            color={props.activeTab === key ? ColorsUI.text2 : undefined}
          >
            <CenterContainerFlex>
              <TextUI isNoSelect ag={Ag["500_20"]} text={value} />
            </CenterContainerFlex>

            {key === props.isNewKey && props.isNewLength ? (
              <NewPendingUI />
            ) : null}
          </Tab>
        )
      })}
    </RowContainer>
  )
}

import { StyleProp } from "../../settings/types/BaseTypes"
import { CenterContainerFlex } from "../containers/CenterContainer"
import { LoaderUI } from "./LoaderUI"

export const FullLoader = () => {
  return (
    <CenterContainerFlex style={styles.h100}>
      <LoaderUI size={30} />
    </CenterContainerFlex>
  )
}

const styles: StyleProp = {
  h100: {
    height: "100%",
  },
}

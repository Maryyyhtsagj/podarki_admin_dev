import React, { useEffect, useRef } from "react"
import { NotifCard } from "../../../components/notifCard/NotifCard"
import { PromocodeCardContent } from "./PromocodeCardContent"
import { useAppDispatch, useAppSelector } from "../../../settings/redux/hooks"
import {
  getPromocodes,
  selectPromocodesValues,
} from "../../../modules/promocodes/PromocodesSlice"
import { LoaderUI } from "../../../template/ui/LoaderUI"
import { CenterContainer } from "../../../template/containers/CenterContainer"

export const  PromocodeCards = () => {
  const { promocodesList, isPromocodeLoad } = useAppSelector(
    selectPromocodesValues,
  )

  const dispatch = useAppDispatch()

  const load = useRef(false)

  useEffect(() => {
    dispatch(getPromocodes())
  }, [])

  return (
    <>
      {isPromocodeLoad === "load" && !promocodesList.length ? (
        <CenterContainer $mb={20}>
          <LoaderUI size={20} />
        </CenterContainer>
      ) : null}

      {promocodesList.map((promocode) => (
        <NotifCard
          key={promocode._id}
          containerProps={{
            $mb: 20,
          }}
          headerColor={"tiffany"}
          content={
            <PromocodeCardContent
              id={promocode._id}
              text={promocode.text}
              promocodeName={promocode.event_name}
            />
          }
        />
      ))}
    </>
  )
}

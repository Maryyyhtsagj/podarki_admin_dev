import { Promocode } from "../models/Promocode"

export type PromocodeStateModel = {
  isPromocodeLoad: "completed" | "load" | "failed"
  isPromocodeUpdate: "completed" | "load" | "failed"
  promocodesList: Promocode[]
}

export type CreatePromocodeDTO = {
  text: string
  event_name: string
}

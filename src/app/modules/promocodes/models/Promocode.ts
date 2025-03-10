import AbstractModel from "../../../settings/abstrcations/models/AbstractModel"

export class Promocode extends AbstractModel {
  _id: string = ""
  text: string = ""
  event_name: string = ""

  constructor(props: any) {
    super()
    this.load(props)
  }
}

import AbstractModel from "../../../settings/abstrcations/models/AbstractModel"

export class Notification extends AbstractModel {
  _id: string = ""
  body: string = ""
  title: string = ""
  date: string = ""
  role: string = ""

  constructor(props: any) {
    super()
    this.load(props)
  }
}

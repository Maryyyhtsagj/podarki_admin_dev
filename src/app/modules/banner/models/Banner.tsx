import AbstractModel from "../../../settings/abstrcations/models/AbstractModel"

export class Banner extends AbstractModel {
  url: string = ""
  _id: string = ""
  isNew: boolean = false

  constructor(props: any) {
    super()
    this.load(props)
  }
}

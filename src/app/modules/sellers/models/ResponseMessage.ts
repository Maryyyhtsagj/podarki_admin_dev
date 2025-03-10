import AbstractModel from "../../../settings/abstrcations/models/AbstractModel"

export class ResponseMessage extends AbstractModel {
  message: string = "success"

  constructor(props: any) {
    super()
    this.load(props)
  }
}

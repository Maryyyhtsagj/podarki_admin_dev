import AbstractModel from "../../../settings/abstrcations/models/AbstractModel"
import { Nullable } from "../../../settings/types/BaseTypes"
import { FinanceStatistics, FinancesSellers } from "../types/FinancesTypes"

export class Finances extends AbstractModel {
  statistics: Nullable<FinanceStatistics> = null
  financesSellers: FinancesSellers[] = []

  constructor(props: any) {
    super()
    this.load(props)
  }
}

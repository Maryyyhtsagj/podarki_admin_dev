import AbstractModel from "../../../settings/abstrcations/models/AbstractModel"
import { Nullable } from "../../../settings/types/BaseTypes"
import { FinanceStatistics, FinancesOrdersSeller } from "../types/FinancesTypes"

export class FinancesOrders extends AbstractModel {
  statistics: Nullable<FinanceStatistics> = null
  orders: FinancesOrdersSeller[] = []

  constructor(props: any) {
    super()
    this.load(props)
  }
}

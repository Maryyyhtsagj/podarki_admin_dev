export enum SellersTabMenuType {
  pending = "pending",
  denied = "denied",
}

export type TSellersTabMenu = {
  [SellersTabMenuType.pending]: string
  [SellersTabMenuType.denied]: string
}

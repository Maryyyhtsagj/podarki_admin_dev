export type TPathValue = {
  path: string
  menuName?: string
}

type TPathApp = {
  home: TPathValue
  seller: TPathValue
  login: TPathValue
  owners: TPathValue
  promocodes: TPathValue
  settings: TPathValue
  finances: TPathValue
  chats: TPathValue
  orders: TPathValue
}

export const PathApp: TPathApp = {
  home: {
    path: "/",
    menuName: "Заявки",
  },
  seller: {
    path: "/seller",
  },
  login: {
    path: "/login",
  },
  owners: {
    path: "/owners",
    menuName: "Владельцы",
  },
  finances: {
    path: "/finances",
    menuName: "Финансы магазинов",
  },
  chats: {
    path: "/chats",
    menuName: "Сообщения",
  },
  promocodes: {
    path: "/promocodes",
    menuName: "Промокоды",
  },
  settings: {
    path: "/settings",
    menuName: "Настройки",
  },
  orders: {
    path: "/orders",
    menuName: "Все заказы",
  },
}

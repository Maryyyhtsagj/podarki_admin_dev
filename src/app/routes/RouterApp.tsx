import { createBrowserRouter } from "react-router-dom"
import { ErrorPage } from "../template/error/ErrorPage"
import { PathApp } from "./path/PathApp"
import { AuthPage } from "../pages/auth/AuthPage"
import { RedirectApp } from "./redirect/RedirectApp"
import { SellersPage } from "../pages/sellers/SellersPage"
import { SellerPage } from "../pages/sellers/seller/SellerPage"
import { OwnersPage } from "../pages/owners/OwnersPage"
import { OwnerPage } from "../pages/owners/owner/OwnerPage"
import { FinancesPage } from "../pages/finances/FinancesPage"
import { FinancesOrdersPage } from "../pages/finances/orders/FinancesOrdersPage"
import { ChatsPage } from "../pages/chats/ChatsPage"
import { PromocodesPage } from "../pages/promocodes/PromocodesPage"
import { CategoriesPage } from "../pages/categories/CategoriesPage"
import { MessagesPage } from "../pages/chats/messages/MessagesPage"
import { OrdersPage } from "../pages/allOrders/OrdersPage"

export const RouterApp = createBrowserRouter([
  {
    path: PathApp.login.path,
    element: <AuthPage />,
  },
  {
    path: PathApp.home.path,
    element: <RedirectApp element={<SellersPage />} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: `/${PathApp.seller.path}/:sellerId`,
        element: <SellerPage />,
      },
    ],
  },
  {
    path: PathApp.owners.path,
    element: <RedirectApp element={<OwnersPage />} />,
    children: [
      {
        path: `${PathApp.owners.path}/:ownerId`,
        element: <OwnerPage />,
      },
    ],
  },
  {
    path: PathApp.finances.path,
    element: <RedirectApp element={<FinancesPage />} />,
    children: [
      {
        path: `${PathApp.finances.path}/:sellerId`,
        element: <FinancesOrdersPage />,
      },
    ],
  },
  {
    path: PathApp.finances.path,
    element: <RedirectApp element={<OrdersPage />} />,
  },
  {
    path: PathApp.chats.path,
    element: <RedirectApp element={<ChatsPage />} />,
    children: [
      {
        path: `${PathApp.chats.path}/:chatId`,
        element: <MessagesPage />,
      },
    ],
  },
  {
    path: PathApp.promocodes.path,
    element: <RedirectApp element={<PromocodesPage />} />,
  },
  {
    path: PathApp.settings.path,
    element: <RedirectApp element={<CategoriesPage />} />,
  },
  {
    path: PathApp.orders.path,
    element: <RedirectApp element={<OrdersPage />} />,
  },
])

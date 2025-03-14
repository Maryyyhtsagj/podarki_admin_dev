import { RouterProvider } from "react-router-dom"
import { RouterApp } from "./app/routes/RouterApp"
import { useAppDispatch, useAppSelector } from "./app/settings/redux/hooks"
import { useEffect, useState } from "react"
import { initAuth, selectAuthValues } from "./app/modules/auth/AuthSlice"
import { FullLoader } from "./app/template/ui/FullLoader"
import { getClaims } from "./app/modules/sellers/SellersSlice"
import { Toaster } from "react-hot-toast"
import { getFcmToken } from "./app/helpers/FirebaseConfig"

export const App = () => {
  const { authUser } = useAppSelector(selectAuthValues)
  const dispatch = useAppDispatch()

  const [load, setLoad] = useState(true)

  // useEffect(() => {
  //   const initializeNotifications = async () => {
  //     try {
  //       await getFcmToken(true) // Pass `isSeller` based on your application's logic
  //     } catch (error) {
  //       console.error("Error initializing notifications:", error)
  //     }
  //   }
  //
  //   initializeNotifications()
  // }, [])

  useEffect(() => {
    dispatch(initAuth())

    setTimeout(() => {
      setLoad(false)
    }, 0)
  }, [])

  useEffect(() => {
    if (authUser?.token) {
      dispatch(getClaims())
    }
  }, [authUser])

  if (load) {
    return <FullLoader />
  }

  return (
    <>
      <RouterProvider router={RouterApp} />
      <Toaster position="top-center" />
    </>
  )
}

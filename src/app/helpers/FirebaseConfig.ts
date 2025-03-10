// import { initializeApp } from "firebase/app"
// import { getMessaging, getToken } from "firebase/messaging"
// import axios from "axios"
// import { Simulate } from "react-dom/test-utils"
// import error = Simulate.error
//
// const firebaseConfig = {
//   apiKey: "AIzaSyBVM79DXNqpE1DvdSirRw-29azSh-8Qe_M",
//   authDomain: "vkaife-79326.firebaseapp.com",
//   projectId: "vkaife-79326",
//   storageBucket: "vkaife-79326.firebasestorage.app",
//   messagingSenderId: "358782134517",
//   appId: "1:358782134517:web:9e3966078712ac4ddbbdbc",
// }
//
// const app = initializeApp(firebaseConfig)
//
// export const getFcmToken = async (isSeller: boolean): Promise<void> => {
//   try {
//     const registration = await navigator.serviceWorker.register(
//       "/firebase-messaging-sw.js",
//     )
//
//     const messaging = getMessaging(app)
//     const currentToken = await getToken(messaging, {
//       vapidKey:
//         "BJGIrCcqxbOSMhBOjLugXCSueHkPKFXlwB7aTMHFbEKeU4-giOwSbUFhI7EP9SEh5hbp1FCbFP_RvaG-ea65L6M",
//       serviceWorkerRegistration: registration,
//     })
//
//     if (currentToken) {
//       console.log("FCM Token:", currentToken)
//
//     } else {
//       console.warn(
//         "No FCM token available. Request permission to generate one.",
//       )
//     }
//   } catch (error) {
//     console.error("An error occurred while retrieving the FCM token.", error)
//   }
// }
//

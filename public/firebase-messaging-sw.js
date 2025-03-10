importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js")

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVM79DXNqpE1DvdSirRw-29azSh-8Qe_M",
  authDomain: "vkaife-79326.firebaseapp.com",
  projectId: "vkaife-79326",
  storageBucket: "vkaife-79326.firebasestorage.app",
  messagingSenderId: "358782134517",
  appId: "1:358782134517:web:9e3966078712ac4ddbbdbc",
}

firebase.initializeApp(firebaseConfig)

// Initialize Firebase Messaging
const messaging = firebase.messaging()

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload,
  )
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png",
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})

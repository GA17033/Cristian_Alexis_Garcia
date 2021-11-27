// Conveniently import this file anywhere to use db

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

const fireBaseConfig = {
  apiKey: "AIzaSyCVLwgagrgB_owSzH_SPwPXvXEbmhprcAk",
  authDomain: "proyecto-nuevo-24030.firebaseapp.com",
  projectId: "proyecto-nuevo-24030",
  storageBucket: "proyecto-nuevo-24030.appspot.com",
  messagingSenderId: "595331243954",
  appId: "1:595331243954:web:fae2082719f8b9c5bb0eab"
}

const app = firebase.initializeApp(fireBaseConfig)

export const db = app.firestore()
export const storage = app.storage()




// Export types that exists in Firestore - Uncomment if you need them in your app
// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }

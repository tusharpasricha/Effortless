import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAMZchIwphzfhHICQ04MtG0f9nZZgjcB3I",
    authDomain: "accountapp-b876a.firebaseapp.com",
    projectId: "accountapp-b876a",
    storageBucket: "accountapp-b876a.appspot.com",
    messagingSenderId: "867770471724",
    appId: "1:867770471724:web:35d97af2b946e367d4c889"
})

export const auth = app.auth()
export default app
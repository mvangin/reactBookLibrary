
import "firebase/auth"
import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "booklibrary-cp.firebaseapp.com",
    databaseURL: "https://booklibrary-cp.firebaseio.com",
    projectId: "booklibrary-cp",
    storageBucket: "booklibrary-cp.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
});

// apiKey: "AIzaSyCk5SJyAU_WRblfpHytNPPszq5ukC3slu4",
//authDomain: "booklibrary-cp.firebaseapp.com",
//databaseURL: "https://booklibrary-cp.firebaseio.com",
//projectId: "booklibrary-cp",
//storageBucket: "booklibrary-cp.appspot.com",
//messagingSenderId: "631447905066",
//appId: "1:631447905066:web:934174504987b1dd943453",
//measurementId: "G-VYQY5FT8N2"

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {db, auth};
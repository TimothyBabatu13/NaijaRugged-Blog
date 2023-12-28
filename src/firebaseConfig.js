
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAL8aF2qmFwfD4qMoVRXmIKLsR-8X-hnbQ",
//   authDomain: "naijarugged-backend.firebaseapp.com",
//   projectId: "naijarugged-backend",
//   storageBucket: "naijarugged-backend.appspot.com",
//   messagingSenderId: "497113784749",
//   appId: "1:497113784749:web:65068d00a1f818c95f8124",
//   measurementId: "G-T1YNR9MTV4"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCKoCuk2wPgU9ZmeBg6-av3TMCXcPxAPXA",
  authDomain: "fir-basics-9aa01.firebaseapp.com",
  projectId: "fir-basics-9aa01",
  storageBucket: "fir-basics-9aa01.appspot.com",
  messagingSenderId: "1047838837459",
  appId: "1:1047838837459:web:7b0f075a2bbce069716226"
};


// const ApiKey = process.env.REACT_APP_API_KEY;

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);

export default {app, database};
// const analytics = getAnalytics(app);






/* Firebase configuration snippet */
/*

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app"

// Add the Firebase products that you want to use
import "firebase/auth"
import "firebase/firestore"

// PUT YOUR OWN FIREBASE CONFIGURATION HERE
var firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebase.auth()
const firestore = firebase.firestore()

export { firebaseAuth, firestore }
*/
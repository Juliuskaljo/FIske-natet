import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG9VJ5B-4pFLzwxCRPoZz7mQ17G954aj0",
  authDomain: "fiskenatet-6b5c9.firebaseapp.com",
  projectId: "fiskenatet-6b5c9",
  storageBucket: "fiskenatet-6b5c9.appspot.com",
  messagingSenderId: "31646358938",
  appId: "1:31646358938:web:2d9cf480fa08a35d94ee23",
  measurementId: "G-KRRXG67KBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }
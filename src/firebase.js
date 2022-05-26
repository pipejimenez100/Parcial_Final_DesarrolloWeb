import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // put your credentials here
  apiKey: "AIzaSyBEfgp6ndWP6EGV9YS5s-V00wQvt4pUkRg",
  authDomain: "final-4492b.firebaseapp.com",
  projectId: "final-4492b",
  storageBucket: "final-4492b.appspot.com",
  messagingSenderId: "85575770510",
  appId: "1:85575770510:web:a7576af929723bd7d204df",
  measurementId: "G-37CBD5DP6J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

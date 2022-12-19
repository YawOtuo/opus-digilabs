// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjaiJ1sjXBLmLDVKa_REa73_VGVanVQPc",
  authDomain: "opus-digilabs.firebaseapp.com",
  projectId: "opus-digilabs",
  storageBucket: "opus-digilabs.appspot.com",
  messagingSenderId: "221033118957",
  appId: "1:221033118957:web:93a014623903e738c4e0e4",
  measurementId: "G-3TX9HCS3V4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyDJpBJrG6m2LdPk1ck_Xw9wQpgFFR7-8U8",
  authDomain: "artvista-gallery.firebaseapp.com",
  projectId: "artvista-gallery",
  storageBucket: "artvista-gallery.appspot.com",
  messagingSenderId: "72796361545",
  appId: "1:72796361545:web:09e6a03e40b1dda43cc098"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
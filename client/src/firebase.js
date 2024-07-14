// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3e6df.firebaseapp.com",
  projectId: "mern-estate-3e6df",
  storageBucket: "mern-estate-3e6df.appspot.com",
  messagingSenderId: "1042175590585",
  appId: "1:1042175590585:web:54b731a7786575f7409b68",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

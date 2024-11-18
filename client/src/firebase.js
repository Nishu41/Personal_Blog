// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "personal-blog-14904.firebaseapp.com",
  projectId: "personal-blog-14904",
  storageBucket: "personal-blog-14904.firebasestorage.app",
  messagingSenderId: "786100864433",
  appId: "1:786100864433:web:6340382d8702d030ce2990"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
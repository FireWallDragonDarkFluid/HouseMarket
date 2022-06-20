// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGAbQGmiuOzpHYGgbWc5QzKQ9w9hMc4i0",
  authDomain: "house-marketplace-app-51378.firebaseapp.com",
  projectId: "house-marketplace-app-51378",
  storageBucket: "house-marketplace-app-51378.appspot.com",
  messagingSenderId: "376597354697",
  appId: "1:376597354697:web:b80d56e92f010662bb9518"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
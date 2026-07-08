// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyyHCwHSxD5hVVlVZyrrdzYdAUKwN9HjE",
  authDomain: "react-crud-a64a0.firebaseapp.com",
  projectId: "react-crud-a64a0",
  storageBucket: "react-crud-a64a0.firebasestorage.app",
  messagingSenderId: "882252982057",
  appId: "1:882252982057:web:5aeb9252d2a3e7c10f3938",
  measurementId: "G-F0B8PTCKDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const fireDb = getFirestore(app)
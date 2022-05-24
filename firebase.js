// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAngLdRQXrgSf4JikRNUXhUao2SXo2vhow",
  authDomain: "nextjs-firebase-e86e0.firebaseapp.com",
  projectId: "nextjs-firebase-e86e0",
  storageBucket: "nextjs-firebase-e86e0.appspot.com",
  messagingSenderId: "752641396482",
  appId: "1:752641396482:web:245322620b5a8d4651fc1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore ();
export {db}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH-Tl0IBCZvwh3_vVrjerFmZ0W9W7pQMg",
  authDomain: "realtor-clone-react-4f646.firebaseapp.com",
  projectId: "realtor-clone-react-4f646",
  storageBucket: "realtor-clone-react-4f646.appspot.com",
  messagingSenderId: "585493150238",
  appId: "1:585493150238:web:a76ed3438ea81b2815cc0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
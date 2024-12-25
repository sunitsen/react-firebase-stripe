// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import firsebase
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCinTC9GhNyUHkda0m-EueDtyuGBK7TpI8",
  authDomain: "react-first-project-fe476.firebaseapp.com",
  projectId: "react-first-project-fe476",
  storageBucket: "react-first-project-fe476.firebasestorage.app",
  messagingSenderId: "968501576526",
  appId: "1:968501576526:web:43b44bade065f33fc5541f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//databsed
export const db = getFirestore(app);
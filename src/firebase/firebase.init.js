import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwqEmkUBWGbhW-WYdDK6pEDn3h-FjczGw",
  authDomain: "project-1ec0f.firebaseapp.com",
  projectId: "project-1ec0f",
  storageBucket: "project-1ec0f.firebasestorage.app",
  messagingSenderId: "728613935533",
  appId: "1:728613935533:web:bc319ceefee11ad8baa924"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
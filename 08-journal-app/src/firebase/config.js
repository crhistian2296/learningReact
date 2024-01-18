// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACUE6OwEPxDTm7FPaWKWzB4KxXkmda0WE",
  authDomain: "journal-d1261.firebaseapp.com",
  projectId: "journal-d1261",
  storageBucket: "journal-d1261.appspot.com",
  messagingSenderId: "741085925823",
  appId: "1:741085925823:web:5e7aac120c6cfbb984110a"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebasDB = getFirestore(FirebaseApp);


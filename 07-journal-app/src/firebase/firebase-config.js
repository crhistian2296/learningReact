import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyACUE6OwEPxDTm7FPaWKWzB4KxXkmda0WE',
  authDomain: 'journal-d1261.firebaseapp.com',
  projectId: 'journal-d1261',
  storageBucket: 'journal-d1261.appspot.com',
  messagingSenderId: '741085925823',
  appId: '1:741085925823:web:5e7aac120c6cfbb984110a',
};

// Initialize Firebase
// firebase.firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };

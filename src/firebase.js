// Import: Firebase
import firebase from "firebase";

// Firebase API and Project Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAojZlmUnVZ2wFx6FrTKxW1w309TypyNSU",
  authDomain: "facebook-clone-bbb8e.firebaseapp.com",
  databaseURL: "https://facebook-clone-bbb8e.firebaseio.com",
  projectId: "facebook-clone-bbb8e",
  storageBucket: "facebook-clone-bbb8e.appspot.com",
  messagingSenderId: "131121214097",
  appId: "1:131121214097:web:928249521bf31b64af8530",
  measurementId: "G-2W1H8BFVF2",
};

// Initialize app with Firebase Configuration
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Connect Firestore as DataBase
const db = firebaseApp.firestore();

// Enable Firebase Authentication
const auth = firebase.auth();

// Enables Google as an Authentication Provider
const provider = new firebase.auth.GoogleAuthProvider();

// Export: auth, proider, db
export { auth, provider };
export default db;

import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyA6m5O1agApWKXe9C4puwe2FdszGOi6lnw",
  authDomain: "firestore-crud-51161.firebaseapp.com",
  projectId: "firestore-crud-51161",
  storageBucket: "firestore-crud-51161.appspot.com",
  messagingSenderId: "921184401699",
  appId: "1:921184401699:web:c0d2addf7de800cd33f496",
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2JqVujQ6Iw2EFPlSvksO2OpC9zt_d_7w",
    authDomain: "zaio--clone-8bea8.firebaseapp.com",
    projectId: "zaio--clone-8bea8",
    storageBucket: "zaio--clone-8bea8.appspot.com",
    messagingSenderId: "971248256803",
    appId: "1:971248256803:web:838fc558a69c81379eae96",
    measurementId: "G-ZF2KEQ9H22"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
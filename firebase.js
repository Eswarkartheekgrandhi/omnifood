const firebase = require("firebase/app");
require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyAJnmLMFhNMuBkym_HIkcunYJBmlF41Lis",
  authDomain: "omnifood-auth.firebaseapp.com",
  projectId: "omnifood-auth",
  storageBucket: "omnifood-auth.appspot.com",
  messagingSenderId: "773188143382",
  appId: "1:773188143382:web:2ff767f86875e2d38be837",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = firebase;

// Import the functions you need from the SDKs you need
// import { initializeApp } from 
const init=require("firebase/app");
const db=require("firebase/firestore");
// import { getDatabase } from ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiIBLAAyj3piA_lH6Q9GkNQ8TK6RgzKwE",
  authDomain: "api-linkedin-firebase.firebaseapp.com",
  projectId: "api-linkedin-firebase",
  storageBucket: "api-linkedin-firebase.appspot.com",
  messagingSenderId: "712647553880",
  appId: "1:712647553880:web:b40a2528aab5bf7312ab2d"
};

// Initialize Firebase
const app = init.initializeApp(firebaseConfig);
const database = db.getFirestore(app);
exports.database=database;
exports.collection=db.collection;
exports.addDoc=db.addDoc;
exports.getDoc=db.getDoc;
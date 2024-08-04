// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeBwlCv17SYK9Jy2r2jg4QdJLj7-lg6Z8",
  authDomain: "inventory-management-96b1f.firebaseapp.com",
  projectId: "inventory-management-96b1f",
  storageBucket: "inventory-management-96b1f.appspot.com",
  messagingSenderId: "349545351245",
  appId: "1:349545351245:web:a072834a6e2668a1b0b404",
  measurementId: "G-KHM65QFD35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
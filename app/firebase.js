// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQVkE9T4gZP1RZOm5gBMFOhXa9JCDChcQ",
  authDomain: "coachemma-f3a33.firebaseapp.com",
  projectId: "coachemma-f3a33",
  storageBucket: "coachemma-f3a33.appspot.com",
  messagingSenderId: "1068271542250",
  appId: "1:1068271542250:web:9c64ad5721acc4b2965c93",
  measurementId: "G-RXMYP5M3CZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
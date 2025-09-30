// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkjY3TgxnPQq9x6SR02l2XXh7FPdsQ1_g",
  authDomain: "i-cherry-teste.firebaseapp.com",
  projectId: "i-cherry-teste",
  storageBucket: "i-cherry-teste.firebasestorage.app",
  messagingSenderId: "390252466421",
  appId: "1:390252466421:web:c076bda62bd83fb574f5bc",
  measurementId: "G-R0ZR241ZS0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdxow3XCOdSjuNRBzi9kMZt_0bsV9E684",
  authDomain: "stadionbookingskoleproject.firebaseapp.com",
  projectId: "stadionbookingskoleproject",
  storageBucket: "stadionbookingskoleproject.appspot.com",
  messagingSenderId: "400617141781",
  appId: "1:400617141781:web:d82f13bc82e58b640f801c",
  measurementId: "G-XX8C3Y6QRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
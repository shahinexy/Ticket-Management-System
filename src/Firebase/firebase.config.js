
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2nacjFAiAfq7yuY4wnqH0fMlH9yioutE",
  authDomain: "shining-car-8e82c.firebaseapp.com",
  projectId: "shining-car-8e82c",
  storageBucket: "shining-car-8e82c.firebasestorage.app",
  messagingSenderId: "367309435874",
  appId: "1:367309435874:web:34ec035bfa2749c31c3fbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
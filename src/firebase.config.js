// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU7zC8xgtE6tVJ7JZH09BZCE0uRIxk0o8",
  authDomain: "fir-email-and-pass-7d05a.firebaseapp.com",
  projectId: "fir-email-and-pass-7d05a",
  storageBucket: "fir-email-and-pass-7d05a.appspot.com",
  messagingSenderId: "323364296527",
  appId: "1:323364296527:web:06d8cd675c46064a1cd73a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
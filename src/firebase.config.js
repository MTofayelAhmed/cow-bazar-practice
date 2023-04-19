// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASWonwQZ-XgphzSXmaEouF4aOi19Vi82w",
  authDomain: "cow-bazar-practice.firebaseapp.com",
  projectId: "cow-bazar-practice",
  storageBucket: "cow-bazar-practice.appspot.com",
  messagingSenderId: "198567745837",
  appId: "1:198567745837:web:5dc6b6156566efe49a1ba4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPCX2Mw90nJweTJKHcbBfS_p4RQMEVtso",
  authDomain: "resale-wizards.firebaseapp.com",
  projectId: "resale-wizards",
  storageBucket: "resale-wizards.appspot.com",
  messagingSenderId: "942864455771",
  appId: "1:942864455771:web:637b5f1ab516271b34877e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
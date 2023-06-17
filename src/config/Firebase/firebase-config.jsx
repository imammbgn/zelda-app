import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrqiNhO_mFZ8wEWjlocJ82fNYH42jcmjo",
  authDomain: "zelda-app-c5440.firebaseapp.com",
  projectId: "zelda-app-c5440",
  storageBucket: "zelda-app-c5440.appspot.com",
  messagingSenderId: "210900687263",
  appId: "1:210900687263:web:7f20ac09b0d91bf7d3c5aa"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
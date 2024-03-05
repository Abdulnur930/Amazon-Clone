import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9Cea-MwmstwQ75pUeG1u4Fp6v_5d5V9Y",
  authDomain: "clone-866b0.firebaseapp.com",
  projectId: "clone-866b0",
  storageBucket: "clone-866b0.appspot.com",
  messagingSenderId: "568154484421",
  appId: "1:568154484421:web:6ea128e382ef661ea48aac",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();

// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmg2Q9syAYHkxOJP-HxSrjUfOkOimu5j4",
  authDomain: "chatt-6c7ce.firebaseapp.com",
  projectId: "chatt-6c7ce",
  storageBucket: "chatt-6c7ce.appspot.com",
  messagingSenderId: "432302484919",
  appId: "1:432302484919:web:c69209941c71cae7594c32",
  measurementId: "G-B9Y5D7859N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

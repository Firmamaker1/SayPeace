import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEYlEwyJebgt8lnjGfUVTXrP181WBuxug",
  authDomain: "saypeace-d712b.firebaseapp.com",
  projectId: "saypeace-d712b",
  storageBucket: "saypeace-d712b.firebasestorage.app",
  messagingSenderId: "725217119905",
  appId: "1:725217119905:web:79caec8dfa02a40360eae0",
  measurementId: "G-ZYSTJ2PB4P"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

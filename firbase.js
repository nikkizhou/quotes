import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDslUSipqaXgpBqIHEjsZDjP5cKx5Q5r0c",
  authDomain: "durable-kingdom-356207.firebaseapp.com",
  projectId: "durable-kingdom-356207",
  storageBucket: "durable-kingdom-356207.appspot.com",
  messagingSenderId: "863293335692",
  appId: "1:863293335692:web:db6c834193af1cb88d33a9",
  measurementId: "G-H4BDBTXDZF"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


export { auth, db, storage }

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDu7b7wvBlPmUAfRpOQbf7bHX1w6w7pE5w",
  authDomain: "productsnextjs.firebaseapp.com",
  projectId: "productsnextjs",
  storageBucket: "productsnextjs.appspot.com",
  messagingSenderId: "554703687447",
  appId: "1:554703687447:web:e764bc4f56782be07c7152",
  measurementId: "G-9P8W8YM757"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


export { auth, db, storage }

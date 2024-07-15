import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDFojo0e8qFg8QtB5JiDq7JsHLP3p6jKsE",
  authDomain: "dropbox-clone-bf7c4.firebaseapp.com",
  projectId: "dropbox-clone-bf7c4",
  storageBucket: "dropbox-clone-bf7c4.appspot.com",
  messagingSenderId: "162992999793",
  appId: "1:162992999793:web:5451743aec7548e50abad0",
  measurementId: "G-VGT1LP6QJL",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

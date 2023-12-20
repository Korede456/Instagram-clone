
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCH-W5jrf_QxvsKupG_6UeIT1Lj4XSu3tQ",
  authDomain: "instagram-clone-4f233.firebaseapp.com",
  projectId: "instagram-clone-4f233",
  storageBucket: "instagram-clone-4f233.appspot.com",
  messagingSenderId: "642632286459",
  appId: "1:642632286459:web:7028566bda6aed47f2b05e",
  measurementId: "G-Q07YN8R706"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage};

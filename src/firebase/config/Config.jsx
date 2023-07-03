
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBwOB-U9ye4I38LY_76DF6fqe7Cz3C9SF0",
  authDomain: "shopnow-5e352.firebaseapp.com",
  projectId: "shopnow-5e352",
  storageBucket: "shopnow-5e352.appspot.com",
  messagingSenderId: "160981467406",
  appId: "1:160981467406:web:add26517e561287eac575f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;
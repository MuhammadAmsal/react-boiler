import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB7RKcKzqs9p6j7tpAl_0mDw1NGJNOcvO0",
  authDomain: "hackathon-da64c.firebaseapp.com",
  projectId: "hackathon-da64c",
  storageBucket: "hackathon-da64c.appspot.com",
  messagingSenderId: "343575542897",
  appId: "1:343575542897:web:363fef7a179c8bc386efd0"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const db = getFirestore(app);
export const storage = getStorage(app);
const provider= new GoogleAuthProvider() 
export {provider}
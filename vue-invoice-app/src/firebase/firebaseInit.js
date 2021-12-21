import config from "./firebase.config"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = config;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addInvoicesData = (docName, data) => {
  return addDoc(collection(db, docName), data)
}
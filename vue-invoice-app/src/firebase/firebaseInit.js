import config from "./firebase.config"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore, doc, collection,
  addDoc, getDocs, updateDoc, deleteDoc
} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = config;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addInvoicesData = async (docName, data) => {
  const docRef = await addDoc(collection(db, docName), data)
  return docRef.id;
}

export const getInvoicesData = async (docName) => {
  const invoiceData = [];
  const querySnapshot = await getDocs(collection(db, docName));
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    if (!invoiceData.some(invoice => invoice.docId === doc.id)) {
      const info = {
        docId: doc.id,
        invoiceId: doc.data().invoiceId,
        billerStreetAddress: doc.data().billerStreetAddress,
        billerCity: doc.data().billerCity,
        billerZipCode: doc.data().billerZipCode,
        billerCountry: doc.data().billerCountry,
        clientName: doc.data().clientName,
        clientEmail: doc.data().clientEmail,
        clientStreetAddress: doc.data().clientStreetAddress,
        clientCity: doc.data().clientCity,
        clientZipCode: doc.data().clientZipCode,
        clientCountry: doc.data().clientCountry,
        invoiceDateUnix: doc.data().invoiceDateUnix,
        invoiceDate: doc.data().invoiceDate,
        paymentTerms: doc.data().paymentTerms,
        paymentDueDateUnix: doc.data().paymentDueDateUnix,
        paymentDueDate: doc.data().paymentDueDate,
        productDescription: doc.data().productDescription,
        invoicePaid: doc.data().invoicePaid,
        invoicePending: doc.data().invoicePending,
        invoiceDraft: doc.data().invoiceDraft,
        invoiceItemList: doc.data().invoiceItemList,
        invoiceTotal: doc.data().invoiceTotal,
      }
      invoiceData.push(info)
    }
  });
  return invoiceData;
}

export const updateInvoice = async (docName, docId, updateData) => {
  const docRef = doc(db, docName, docId);
  const result = await updateDoc(docRef, updateData).then(() => {
    return true;
  }).catch(() => {
    return false;
  });
  return result;
}

export const deleteInvoiceData = async (docName, docId) => {
  const result = await deleteDoc(doc(db, docName, docId)).then(() => {
    return true;
  }).catch(() => {
    return false;
  });
  return result;
}
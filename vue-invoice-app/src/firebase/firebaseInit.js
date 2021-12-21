import config from "./firebase.config"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = config;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addInvoicesData = async (docName, data) => {
  return await addDoc(doc(collection(db, docName)), data)
}

export const getInvoicesData = async (docName) => {
  const invoiceData = [];
  const querySnapshot = await getDocs(collection(db, docName));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    // if (invoiceData.some(invoice => invoice.docId === doc.id)) {
      const info = {
          docId: doc.id,
          billerStreetAddress: doc.data().billerStreetAddress,
          billerCity: doc.data().billerStreetAddress,
          billerZipCode: doc.data().billerStreetAddress,
          billerCountry: doc.data().billerStreetAddress,
          clientName: doc.data().billerStreetAddress,
          clientEmail: doc.data().billerStreetAddress,
          clientStreetAddress: doc.data().billerStreetAddress,
          clientCity: doc.data().clientCity,
          clientZipCode: doc.data().clientZipCode,
          clientCountry: doc.data().clientCountry,
          invoiceDateUnix: doc.data().invoiceDateUnix,
          invoiceDate: doc.data().invoiceDate,
          paymentTerms: doc.data().paymentTerms,
          paymentDueDateUnix: doc.data().paymentDueDateUnix,
          paymentDueDate: doc.data().paymentDueDate,
          productDescription: doc.data().productDescription,
          invoicePending: doc.data().invoicePending,
          invoiceDraft: doc.data().invoiceDraft,
          invoiceItemList: doc.data().invoiceItemList,
          invoiceTotal: doc.data().invoiceTotal,
      }
      invoiceData.push(info)
    // }
    return invoiceData;
  });
}
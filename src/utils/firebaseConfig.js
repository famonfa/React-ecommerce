// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, query } from "firebase/firestore";
import { collection, getDocs, where } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb57ji1NFzidnhRX-LDnpBSWNUjxE7M00",
  authDomain: "ecommerce-nintendooldies.firebaseapp.com",
  projectId: "ecommerce-nintendooldies",
  storageBucket: "ecommerce-nintendooldies.appspot.com",
  messagingSenderId: "132944793548",
  appId: "1:132944793548:web:f5f76af0e31d3463309769"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const firestoreFetch = async (category) => {
  let q;
  if (category) {
    q = query(collection(db, "products"), where('categoryId', '==', category));

  } else {
    q = query(collection(db, "products"));
  }

  const querySnapshot = await getDocs(q);
  const dataFromFirestore = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
  console.log(dataFromFirestore);
  return dataFromFirestore

  // querySnapshot.forEach((doc) => {
  //     console.log(`${doc.id} => ${doc.data()}`);
  // });

}
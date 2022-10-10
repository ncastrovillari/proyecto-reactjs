// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCq7f40h7cgAJPt2-593ZmZ-Sxs1EanDUU",
    authDomain: "ecommerce-creacion.firebaseapp.com",
    projectId: "ecommerce-creacion",
    storageBucket: "ecommerce-creacion.appspot.com",
    messagingSenderId: "672094561532",
    appId: "1:672094561532:web:610f2caea65d44b4aea379"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCleELK6TZC0TCj4JNzbbEjHk8rQJAlgRU",
    authDomain: "journal-app-44f20.firebaseapp.com",
    projectId: "journal-app-44f20",
    storageBucket: "journal-app-44f20.appspot.com",
    messagingSenderId: "286394090061",
    appId: "1:286394090061:web:bca09bebf72aee2018d204"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()
const googleAuthProvider = new GoogleAuthProvider()

export {
    db,
    googleAuthProvider,
}
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig  = {
    apiKey: "AIzaSyBjYnfJxuaCrFAYGNLiqeQVa_Nwgha6JR8",
    authDomain: "halkhata-54d86.firebaseapp.com",
    projectId: "halkhata-54d86",
    storageBucket: "halkhata-54d86.appspot.com",
    messagingSenderId: "207187499943",
    appId: "1:207187499943:web:ab2e428e0aab443f8cf482"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

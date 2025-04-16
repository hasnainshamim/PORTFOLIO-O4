// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore,collection ,doc,addDoc ,setDoc ,getDocs, query, orderBy ,deleteDoc,getDoc,updateDoc} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjgtziOxqrUwRdL5R-pFbUAq4xTbeb56M",
    authDomain: "hsport04.firebaseapp.com",
    projectId: "hsport04",
    storageBucket: "hsport04.firebasestorage.app",
    messagingSenderId: "972347116336",
    appId: "1:972347116336:web:d2f905a3acb7080d9b56f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export{db,collection,doc,addDoc ,setDoc,getDocs, query, orderBy ,deleteDoc,getDoc,updateDoc }
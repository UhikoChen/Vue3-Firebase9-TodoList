// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKmCvrajSmaMYY-oXeIPNaFReu9s6Wlz0",
    authDomain: "todolist-f9347.firebaseapp.com",
    projectId: "todolist-f9347",
    storageBucket: "todolist-f9347.appspot.com",
    messagingSenderId: "936254511994",
    appId: "1:936254511994:web:d33f0df276b6eaee94d4c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}
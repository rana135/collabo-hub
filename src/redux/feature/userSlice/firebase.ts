// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMOftsSzJbgAu8Iy5BwqiR6zpgD4y4LIQ",
    authDomain: "collabo-hub.firebaseapp.com",
    projectId: "collabo-hub",
    storageBucket: "collabo-hub.appspot.com",
    messagingSenderId: "914769651408",
    appId: "1:914769651408:web:2fa2cb7800de51674020d5",
    measurementId: "G-S25FW3MNWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

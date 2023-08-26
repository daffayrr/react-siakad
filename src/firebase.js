// src/firebase.js
import firebase from 'firebase/compat/app'; // Perhatikan perubahan ini
import 'firebase/compat/auth'; // Dan ini

const firebaseConfig = {
    apiKey: "AIzaSyC4NId7p7jDQKGTDUau9rUFp8lhxRItH9o",
    authDomain: "siakad-auth-230826.firebaseapp.com",
    projectId: "siakad-auth-230826",
    storageBucket: "siakad-auth-230826.appspot.com",
    messagingSenderId: "509994864027",
    appId: "1:509994864027:web:013f524200787d90e8e53e",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWGWTzOEMXemqqH-4uoI-YUyKC5MzYdIY",
    authDomain: "taramen-6d18b.firebaseapp.com",
    projectId: "taramen-6d18b",
    storageBucket: "taramen-6d18b.appspot.com",
    messagingSenderId: "719566527785",
    appId: "1:719566527785:web:65e5f722b7a44ba3d76b38",
    measurementId: "G-LZD5KEXMBX"
};

// init firebase
firebase.initializeApp(firebaseConfig);

const taramenAuth = firebase.auth();
const taramenFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const taramenStorage = firebase.storage()

export { taramenFirestore, timestamp, taramenAuth, taramenStorage }
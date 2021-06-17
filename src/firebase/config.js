import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAWGWTzOEMXemqqH-4uoI-YUyKC5MzYdIY",
    authDomain: "taramen-6d18b.firebaseapp.com",
    projectId: "taramen-6d18b",
    storageBucket: "taramen-6d18b.appspot.com",
    messagingSenderId: "719566527785",
    appId: "1:719566527785:web:d2d8d28aaa66fc55d76b38",
    measurementId: "G-WTVRW2Q3PD"
};

// init firebase
firebase.initializeApp(firebaseConfig);

const taramenAuth = firebase.auth();
const taramenFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const taramenStorage = firebase.storage()

export { taramenFirestore, timestamp, taramenAuth, taramenStorage }
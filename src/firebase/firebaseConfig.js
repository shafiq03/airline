import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// Your Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyDQ86A9HizauwpqFqag0S273TKCW-UqxQM",
    authDomain: "shop-1e40c.firebaseapp.com",
    projectId: "shop-1e40c",
    storageBucket: "shop-1e40c.firebasestorage.app",
    messagingSenderId: "726414243184",
    appId: "1:726414243184:web:6331979576b463eda58bb5",
    measurementId: "G-7SYCHV9RTH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Services
export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;
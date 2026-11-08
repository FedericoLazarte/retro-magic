import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCop-zzZYWwmu-g8-w5qrhrTs68RH8Jn0U",
  authDomain: "retro-card-7c366.firebaseapp.com",
  projectId: "retro-card-7c366",
  storageBucket: "retro-card-7c366.firebasestorage.app",
  messagingSenderId: "569057045815",
  appId: "1:569057045815:web:1893b7ff2ff300259cbeb2",
  measurementId: "G-DRF3MK9650"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

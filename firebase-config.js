import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/11.7.3/firebase-analytics.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyCeOe3QvWIN13KVu-4xbPByQkM3N5S3ErI",
  authDomain: "cipherpuzzle.firebaseapp.com",
  projectId: "cipherpuzzle",
  storageBucket: "cipherpuzzle.firebasestorage.app",
  messagingSenderId: "472791209438",
  appId: "1:472791209438:web:518b112184702d60d7394f",
  measurementId: "G-94434C9VKB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export Firestore too
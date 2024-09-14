// Import the necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';


// Your Firebase config object (replace with your own)
const firebaseConfig = {
   apiKey: "AIzaSyB0DF0hO2ZVqY-Y1TxeCj2991M1IqEeY98",
  authDomain: "chat-724a6.firebaseapp.com",
  projectId: "chat-724a6",
  storageBucket: "chat-724a6.appspot.com",
  messagingSenderId: "386663373270",
  appId: "1:386663373270:web:1e02bcb780a2d11956ec77",
  measurementId: "G-1VZ4YKB9KS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log('Firebase App Initialized:', app);

// Initialize Firebase services
const auth = getAuth(app);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);




export { auth, firestore, analytics };

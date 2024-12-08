import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAcw9Wt2BPsmKoHdtiVboIqFuibFj1-Bk",
  authDomain: "mywebsite-369dc.firebaseapp.com",
  projectId: "mywebsite-369dc",
  storageBucket: "mywebsite-369dc.firebasestorage.app",
  messagingSenderId: "950943933961",
  appId: "1:950943933961:web:5c70b92f2d181de7ab7ad8",
  measurementId: "G-LB27M54ZN7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };

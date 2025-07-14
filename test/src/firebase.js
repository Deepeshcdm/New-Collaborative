// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuZLCS6h2GmxTaVvypkoYn68oSg2FaYyo",
  authDomain: "collaborative-cutlery.firebaseapp.com",
  projectId: "collaborative-cutlery",
  storageBucket: "collaborative-cutlery.firebasestorage.app",
  messagingSenderId: "795928038811",
  appId: "1:795928038811:web:858ca2512a9d7c8e6ee53e",
  measurementId: "G-574P0VLJ76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

export default app;
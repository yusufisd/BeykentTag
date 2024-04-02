// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCHc6R-pLjxqK9Wq2r2NXrUPqAMp70ZHM",
  authDomain: "beykenttag.firebaseapp.com",
  projectId: "beykenttag",
  storageBucket: "beykenttag.appspot.com",
  messagingSenderId: "116644081560",
  appId: "1:116644081560:web:22c5c9da8b28803dd845ed",
  measurementId: "G-4FWDS63WK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
  
export const db = getFirestore(app);


const analytics = getAnalytics(app);

export default app;
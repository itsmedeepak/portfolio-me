// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyARbdxoWxZgnAlnOJijco9npZY83IURcyw",
  authDomain: "portfolio-13ee8.firebaseapp.com",
  projectId: "portfolio-13ee8",
  storageBucket: "portfolio-13ee8.appspot.com",
  messagingSenderId: "992758915608",
  appId: "1:992758915608:web:f9316204c2970164e6d96d",
  measurementId: "G-R1719G4Q8X"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const analytics: Analytics = getAnalytics(app);

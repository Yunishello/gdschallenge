import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAwJtNrvVtt9-JAU64vuAFiYhj3F_uscUY",
  authDomain: "gdschallenge.firebaseapp.com",
  projectId: "gdschallenge",
  storageBucket: "gdschallenge.appspot.com",
  messagingSenderId: "180116613375",
  appId: "1:180116613375:web:4ede28ea7b00dd3083c4ca",
  measurementId: "G-T5XVWN3KNY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
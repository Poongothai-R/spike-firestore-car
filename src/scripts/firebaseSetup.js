// Node modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Properties
const setup = {
  apiKey: "AIzaSyC_Z4_TjZ9wAg-gqXO33AtTseD2iaJ2IK0",
  authDomain: "spike-firebase-car.firebaseapp.com",
  databaseURL: "https://spike-firebase-car-default-rtdb.firebaseio.com",
  projectId: "spike-firebase-car",
  storageBucket: "spike-firebase-car.appspot.com",
  messagingSenderId: "1091022675258",
  appId: "1:1091022675258:web:5e7348c9e3e557914f8403",
  measurementId: "G-QTX4TB48NJ"
};
const firebase = initializeApp(setup);

// Exports
export const database = getFirestore(firebase);

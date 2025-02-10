import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: "react-auth-6788d.firebaseapp.com",
//   projectId: "react-auth-6788d",
//   storageBucket: "react-auth-6788d.appspot.com",
//   messagingSenderId: "131797845021",
//   appId: "1:131797845021:web:3f7ff4766e2b89ca5d32f4",
//   measurementId: "G-VWPBR1NSLL",
// };

const firebaseConfig = {
  apiKey: "AIzaSyC6tEjUDtG6QNkpKI7rKRE9d01oISF-m6Y",
  authDomain: "visiontalk-a3c78.firebaseapp.com",
  projectId: "visiontalk-a3c78",
  storageBucket: "visiontalk-a3c78.firebasestorage.app",
  messagingSenderId: "1071322871183",
  appId: "1:1071322871183:web:b1d781b534c487df15c7fa",
  measurementId: "G-YEB3YX1DGN"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);


export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC6tEjUDtG6QNkpKI7rKRE9d01oISF-m6Y",
//   authDomain: "visiontalk-a3c78.firebaseapp.com",
//   projectId: "visiontalk-a3c78",
//   storageBucket: "visiontalk-a3c78.firebasestorage.app",
//   messagingSenderId: "1071322871183",
//   appId: "1:1071322871183:web:b1d781b534c487df15c7fa",
//   measurementId: "G-YEB3YX1DGN"
// };

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
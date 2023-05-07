// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBq9Jmq7yooSTjdI2tQA6pUcG5uoELfj6s",
  authDomain: "startech-35507.firebaseapp.com",
  projectId: "startech-35507",
  storageBucket: "startech-35507.appspot.com",
  messagingSenderId: "442017208219",
  appId: "1:442017208219:web:bc498d495404a2dc03b33e",
  measurementId: "G-RQHF3X6M5N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
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

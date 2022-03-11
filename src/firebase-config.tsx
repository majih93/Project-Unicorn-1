import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// 연결되어잇는 firebase 정보
const firebaseConfig = {
  apiKey: "AIzaSyBJ0v-IkVSIDtUaJRXPVF_GqPDFR6_Lshw",
  authDomain: "auth-development-a7e36.firebaseapp.com",
  projectId: "auth-development-a7e36",
  storageBucket: "auth-development-a7e36.appspot.com",
  messagingSenderId: "621574519400",
  appId: "1:621574519400:web:62da485bba5a934f0819dd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// get authentication status
export const auth = getAuth(app);

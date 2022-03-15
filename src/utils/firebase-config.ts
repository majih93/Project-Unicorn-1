import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// 연결되어잇는 firebase 정보
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// get authentication status
export const auth = getAuth(app);

// firestore 데이터베이스 연결

export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsPz4_XpOJ8WQtLYT904V2HTIFBZ65dFY",
  authDomain: "group-chat-app-react.firebaseapp.com",
  projectId: "group-chat-app-react",
  storageBucket: "group-chat-app-react.appspot.com",
  messagingSenderId: "123191454231",
  appId: "1:123191454231:web:17a50ddbeb1025b1bf8a52"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

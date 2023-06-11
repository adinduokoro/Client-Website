import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "wdf-training.firebaseapp.com",
  projectId: "wdf-training",
  storageBucket: "wdf-training.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
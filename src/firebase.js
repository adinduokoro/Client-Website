import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC696xmrez4R-dgH7cPxX74dVYUEkDeeQs",
  authDomain: "wdf-training.firebaseapp.com",
  projectId: "wdf-training",
  storageBucket: "wdf-training.appspot.com",
  messagingSenderId: "11650433920",
  appId: "1:11650433920:web:c891c49496895c79c2b765"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
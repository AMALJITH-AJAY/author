
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBl31YPWqAxznAoxEVN_E64eNeVJWXjHEg",
  authDomain: "react-crud-d2b71.firebaseapp.com",
  projectId: "react-crud-d2b71",
  storageBucket: "react-crud-d2b71.appspot.com",
  messagingSenderId: "698564773660",
  appId: "1:698564773660:web:444efbdae6c3ea1c60dcd9",
  measurementId: "G-02BLDYTL9W"
};


const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
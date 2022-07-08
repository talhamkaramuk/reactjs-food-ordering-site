import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrjHONqvT4iLAjkp0DhH-54a17vwq7uyU",
  authDomain: "food-delivery-project-fea82.firebaseapp.com",
  databaseURL:
    "https://food-delivery-project-fea82-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "food-delivery-project-fea82",
  storageBucket: "food-delivery-project-fea82.appspot.com",
  messagingSenderId: "487556154470",
  appId: "1:487556154470:web:62183bc72def392aabd9a7",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

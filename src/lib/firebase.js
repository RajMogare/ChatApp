import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCQ0t1MPjvF2P_XyLfMXkMb-YtAxAT4enc",
  authDomain: "reactchatapp-cdd9c.firebaseapp.com",
  projectId: "reactchatapp-cdd9c",
  storageBucket: "reactchatapp-cdd9c.appspot.com",
  messagingSenderId: "1029255301945",
  appId: "1:1029255301945:web:63bda504f5d682c2a736e8"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db=getFirestore();

export const storage=getStorage();
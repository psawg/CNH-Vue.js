


// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// ⚠️ thay giá trị bằng config của dự án bạn
const firebaseConfig = {
  apiKey: "AIzaSyADlAUfIALzAmDb_Yk17bHMi6UQGUDaAGU",
  authDomain: "allofgame-1fe7a.firebaseapp.com",
  projectId: "allofgame-1fe7a",
  storageBucket: "allofgame-1fe7a.firebasestorage.app",
  messagingSenderId: "1073424807885",
  appId: "1:1073424807885:web:0ef8a9ee38a8f15f077684",
  measurementId: "G-8MSKVYSBM8"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

// (tuỳ chọn) export mặc định nếu bạn thích import default
export default { firebaseApp, db, auth };

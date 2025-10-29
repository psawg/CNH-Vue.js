// Import SDK Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// ⚙️ Cấu hình Firebase (dán từ web của bạn vào)
const firebaseConfig = {
  apiKey: "AIzaSyADUlfIA1rAnbD_YkZHbMi6U0UGDaUgAGU",
  authDomain: "allofgame-1fe7a.firebaseapp.com",
  projectId: "allofgame-1fe7a",
  storageBucket: "allofgame-1fe7a.appspot.com",
  messagingSenderId: "187342408788",
  appId: "1:187342408788:web:8afae983e81f58707684",
  measurementId: "G-8MKSYSW8MB"
};

// 🚀 Khởi tạo Firebase App
const app = initializeApp(firebaseConfig);

// 🧠 Export các dịch vụ để Vue sử dụng
export const db = getFirestore(app);     // Database Firestore
export const auth = getAuth(app);        // Đăng nhập
export const storage = getStorage(app);  // Lưu ảnh

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-storage.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyDMMwciq6QoLSaWK6xfdr0U3ynyahtoaSk",
    authDomain: "studio-a33fe.firebaseapp.com",
    databaseURL: "https://studio-a33fe-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "studio-a33fe",
    storageBucket: "studio-a33fe.firebasestorage.app",
    messagingSenderId: "753539109404",
    appId: "1:753539109404:web:3778eb4f51775d1ce645d9",
    measurementId: "G-KRYLYFMJVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export ตัวแปรไปให้หน้าอื่นใช้งาน
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
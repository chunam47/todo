import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClFQf2wEfvj6JcfRkywmDksrIsSWbeggU",
  authDomain: "todo-list-b73d8.firebaseapp.com",
  projectId: "todo-list-b73d8",
  storageBucket: "todo-list-b73d8.appspot.com",
  messagingSenderId: "882534240617",
  appId: "1:882534240617:web:4d29cd509f77578bc1edf8",
  measurementId: "G-FP29P07D35",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

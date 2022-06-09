import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjSX4IcwM08DOlRtdULibpkK9FJHTC5GA",
  authDomain: "todo-list-f5f47.firebaseapp.com",
  projectId: "todo-list-f5f47",
  storageBucket: "todo-list-f5f47.appspot.com",
  messagingSenderId: "243783710672",
  appId: "1:243783710672:web:294d8ba2ee4ee0829debd5",
  measurementId: "G-F2RXEY0DV1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

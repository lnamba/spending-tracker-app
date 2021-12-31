import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBk_4EJEiH6dKzFkWLlzACpnkVVMwZ9Rss",
  authDomain: "spending-tracker-a204b.firebaseapp.com",
  projectId: "spending-tracker-a204b",
  storageBucket: "spending-tracker-a204b.appspot.com",
  messagingSenderId: "928090345161",
  appId: "1:928090345161:web:0f568831358326ab244718",
  measurementId: "G-8NLEFMRRDR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
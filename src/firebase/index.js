import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD7qa1mpqRDpHwKbLUv4pNGmkoJzCxbSMc",
    authDomain: "antoan-data.firebaseapp.com",
    projectId: "antoan-data",
    storageBucket: "antoan-data.appspot.com",
    messagingSenderId: "206272901359",
    appId: "1:206272901359:web:955af0fb8fcbfc95abeb1a"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // plugin for FireStore database
import { getStorage } from "firebase/storage"; // plugin for the Firebase CloudStorage dynamic hosting
import { getAuth } from "firebase/auth"; // plugin for the Firebase Auth account system

//Properties
const firebaseConfig = {
  apiKey: "AIzaSyAQpF7270QSAULti3QIZ6AbP8EwOJVUmYw",
  authDomain: "netflix-clone-60291.firebaseapp.com",
  projectId: "netflix-clone-60291",
  storageBucket: "netflix-clone-60291.appspot.com",
  messagingSenderId: "280265139705",
  appId: "1:280265139705:web:899576601c038d78344928",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const firestore = getFirestore(firebaseApp);
export const cloudStorage = getStorage(firebaseApp);
export const authentification = getAuth(firebaseApp);

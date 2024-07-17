import firebase from "firebase";
import "firebase/auth"


const firebaseConfig = {
  apiKey: process.env.API_KEY,
  apiKey: "AIzaSyDrMflaNyYJJXv-8s4ukGpRgIIsYR1UExI",
  authDomain: "netflix-frontend-clone-aee11.firebaseapp.com",
  projectId: "netflix-frontend-clone-aee11",
  storageBucket: "netflix-frontend-clone-aee11.appspot.com",
  messagingSenderId: "168751716905",
  appId: "1:168751716905:web:6f9e29d7944321cd1d1a38"
};

/*
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "netflix-project-clone-7bba0.firebaseapp.com",
    projectId: "netflix-project-clone-7bba0",
    storageBucket: "netflix-project-clone-7bba0.appspot.com",
    messagingSenderId: "571921899127",
    appId: "1:571921899127:web:c17f6fc6635f945738b072"
  };
  */

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth}; 
  export default db;





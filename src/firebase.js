import firebase from "firebase";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDQCGmpmm07R11tFVTxX-9EbYCQuxtVnZc",
    authDomain: "netflix-project-clone-7bba0.firebaseapp.com",
    projectId: "netflix-project-clone-7bba0",
    storageBucket: "netflix-project-clone-7bba0.appspot.com",
    messagingSenderId: "571921899127",
    appId: "1:571921899127:web:c17f6fc6635f945738b072"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth}; 
  export default db;
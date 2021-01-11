import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore"


const config = {
  apiKey: "AIzaSyAZcfS2u1phsAET9-8F7_L1A_LuSBCnCYU",
  authDomain: "inspektor-57add.firebaseapp.com",
  databaseURL: "https://inspektor-57add.firebaseio.com",
  projectId: "inspektor-57add",
  storageBucket: "inspektor-57add.appspot.com",
  messagingSenderId: "175611888660",
  appId: "1:175611888660:web:7d757dfb1587932e691301",
  measurementId: "G-T5QM09LKSB",
};


const firebase = app.initializeApp(config);

export default firebase;
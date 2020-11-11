import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
const config = {
  apiKey: "AIzaSyAZcfS2u1phsAET9-8F7_L1A_LuSBCnCYU",
  authDomain: "inspektor-57add.firebaseapp.com",
  databaseURL: "https://inspektor-57add.firebaseio.com",
  projectId: "inspektor-57add",
  storageBucket: "inspektor-57add.appspot.com",
  messagingSenderId: "175611888660",
  appId: "1:175611888660:web:7d757dfb1587932e691301",
};
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
    this.firestore = app.firestore();
    this.firestore.FieldValue = app.firestore.FieldValue;
  }
  // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
    
    doSignOut = () => this.auth.signOut();
    
    doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);
    
    doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
    // *** User API ***
    
    user = (uid) => this.db.ref(`users/${uid}`);
    
    users = () => this.db.ref("users");
}

export default Firebase;
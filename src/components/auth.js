import React, { useEffect, useState, createContext } from "react";
import firebase from "../components/Firebase/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {


    //wylogowanie użytkownika po odświeżeniu striny
    // firebase.auth().signOut();

    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

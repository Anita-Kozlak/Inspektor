import { AuthUserContext } from '../Session';
import MainViewPage from '../MainView';
import SignInPage from '../SignIn';
import React, {  useState, useEffect } from "react";
import firebase from "../Firebase/firebase";

const Navigation = () => {

    const [userLogged, setUserLogged] = useState(false); // it keep tracks of user login status
    useEffect(() => {
      const authListener = firebase.auth().onAuthStateChanged((user) => {
         
        setUserLogged(user ? true : false);
      });
      return authListener;
    }, []);
    return (
          <div>
            {
                userLogged ? <NavigationAuth /> : <NavigationNonAuth />
            }
    </div>
    )
  
        };

const NavigationAuth = () => (
    <ul>
        <MainViewPage />
      
    </ul>
);
const NavigationNonAuth = () => (
    <ul>
       <SignInPage />

    </ul>
);

export default Navigation;
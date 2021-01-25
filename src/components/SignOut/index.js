import React from "react";
import firebase from "../Firebase/firebase";
 import { withRouter } from "react-router-dom";


const SignOutButton = (props) =>  {

    const onSignout = async () => {
      await firebase.auth().signOut()
       .then(()=> {
      props.history.push("/");
    })
  }
     return (
           <button className="nav" type="button" onClick={onSignout}>
             Wyloguj
           </button>
     );
 }

 export default withRouter(SignOutButton);

import React from "react";
// import { Link } from "react-router-dom";
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
        //  <Link to="/">
          //  {" "}
           <button className="btnSignOut" type="button" onClick={onSignout}>
             Wyloguj
           </button>
        //  </Link>
     );
 }

 export default withRouter(SignOutButton);

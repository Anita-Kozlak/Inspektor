import React from 'react';
import {Link} from "react-router-dom";
import { withFirebase } from '../Firebase';
import * as ROUTES from "../../constants/routes";

const SignOutButton = ({ firebase }) => (
   <Link to={ROUTES.SIGN_IN}> <button className="btnSignOut" type="button" onClick={firebase.doSignOut} style={{float: "left", marginLeft: 10, marginTop: 10}}>Wyloguj
    </button></Link>
);

export default withFirebase(SignOutButton);
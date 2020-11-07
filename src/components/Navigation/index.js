import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';
import SignInPage, {SignInForm} from "../SignIn";

const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer>
    </div>
);

const NavigationAuth = () => (
    <ul>
        <li>
            <SignOutButton />
        </li>
    </ul>
);
const NavigationNonAuth = () => (
    <ul>
        <li className="btnSignIn">
            <Link to={ROUTES.SIGN_IN} style={{textDecoration: 'none', color: "white"}}>Zaloguj</Link>
        </li>

    </ul>
);

export default Navigation;
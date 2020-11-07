import React, {useState, useEffect} from "react";
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage, {SignInForm} from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import MainView from "../MainView";
import WorkPlan from "../WorkPlan";
import FirstWeek from "../September/WorkPlanFirstWeek";
import Cast from "../Cast";
import CastFirstWeek from "../September/CastFirstWeek";
import Reviews from "../Reviews";
import Regulations from "../Regulations";
import Contact from "../Contact";
import Chat from "../Chat";
import Notes from "../Notes";
import Info from "../Info";
import News from "../News";
import firebase from "firebase";



const App = () => {

    useEffect(() => {

        firebase.auth().signOut();
        const msg = firebase.messaging();
            msg.requestPermission().then(()=> {
                return msg.getToken();
            }).then((data) => {
                console.log("token", data)
        })

    }, [])
    const handleSubmitMessage = msg => {
        console.log(msg)

    }

    return (
    <Router>
        <div>
            <Navigation/>

            {/*<hr />*/}

            {/*<Route exact path={ROUTES.LANDING} component={LandingPage}/>*/}
            <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
            <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
            <Route
                path={ROUTES.PASSWORD_FORGET}
                component={PasswordForgetPage}
            />
            <Route path={ROUTES.HOME} component={HomePage}/>
            <Route path={ROUTES.ACCOUNT} component={AccountPage}/>
            <Route path={ROUTES.ADMIN} component={AdminPage}/>
            <Route path={ROUTES.MAIN_VIEW} component={MainView}/>
            <Route path={ROUTES.WORK_PLAN} component={WorkPlan}/>
            <Route path={ROUTES.FIRST_WEEK} component={FirstWeek}/>
            <Route path={ROUTES.CAST} component={Cast}/>
            <Route path={ROUTES.CAST_FIRST_WEEK} component={CastFirstWeek}/>
            <Route path={ROUTES.REVIEWS} component={Reviews}/>
            <Route path={ROUTES.REGULATIONS} component={Regulations}/>
            <Route path={ROUTES.CONTACT} component={Contact} />

            <Route exact path={ROUTES.CHAT} render={() => <Chat onSubmit={handleSubmitMessage} />} />
            <Route path={ROUTES.NOTES} component={Notes} />
            <Route path={ROUTES.INFO} component={Info} />
            <Route path={ROUTES.NEWS} component={News} />
        </div>
    </Router>)
};

export default withAuthentication(App);
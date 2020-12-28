import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import MainViewPage from "../MainView";
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
import { AuthProvider } from "../auth";
import PrivateRoute from "../PrivateRoute";
import firebase from "firebase";

const App = () => {
  useEffect(() => {
    // firebase.auth().signOut();
    const msg = firebase.messaging();
    msg
      .requestPermission()
      .then(() => {
        return msg.getToken();
      })
      .then((data) => {
        console.log("token", data);
      });
  }, []);
  // msg.onMessage(function(payload) {
  //   console.log('onMessage', payload);
  // })
  return (
    <AuthProvider>
      {/* <Calendar /> */}
      <Router>
        <Switch>
          <Route exact path="/" component={SignInPage} />
          <Route exact path="/signup" component={SignUpPage} />
        
          <Route exact path="/pw-forget" component={PasswordForgetPage} />
          {/* <Route path={ROUTES.ADMIN} component={AdminPage} /> */}
          {/* <Route exact path="/mainview" component={MainViewPage} /> */}
          <Route exact path="/workplan" component={WorkPlan} />
          <Route exact path="/firstweek" component={FirstWeek} />
          <Route exact path="/cast" component={Cast} />
          <Route exact path="/cast-first-week" component={CastFirstWeek} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/regulations" component={Regulations} />
          <Route exact path="/contact" component={Contact} />
          ​ <Route exact path="/chat" component={Chat} />
          <Route exact path="/notes" component={Notes} />
          <Route exact path="/info" component={Info} />
          <PrivateRoute exact path="/mainview" component={MainViewPage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

// export default withAuthentication(App);
export default App;

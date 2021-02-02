import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import SignUpPage from "../SignUp";
import PasswordForgetPage from "../PasswordForget";
import MainViewPage from "../MainView";
import WorkPlan from "../WorkPlan";
import Cast from "../Cast";
import Reviews from "../Reviews";
import Regulations from "../Regulations";
import Contact from "../Contact";
import Chat from "../Chat";
import Info from "../Info";
import { AuthProvider } from "../auth";
import PrivateRoute from "../PrivateRoute";
import firebase from "firebase";
import Navigation from "../Navigation";
import Admin from "../Admin";
import Users from "../Users";
import AdminInfo from "../AdminInfo";

const App = () => {
  useEffect(() => {
    //wysyłanie powiadomień cloud messaging
    const msg = firebase.messaging();
    msg
      .requestPermission()
      .then(() => {
        return msg.getToken();
      })
      .then((data) => {
        console.log("token", data);
      });
      msg.onMessage(function (payload) {
        console.log('onMessage', payload)
      })
  }, []);
  

  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/" component={Navigation} />
          <Route exact path="/pw-forget" component={PasswordForgetPage} />
          <Route exact path="/workplan" component={WorkPlan} />
          <Route exact path="/cast" component={Cast} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/regulations" component={Regulations} />
          <Route exact path="/contact" component={Contact} />
          ​<Route exact path="/chat" component={Chat} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/admin-info" component={AdminInfo} />
          <PrivateRoute exact path="/mainview" component={MainViewPage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

// export default withAuthentication(App);
export default App;

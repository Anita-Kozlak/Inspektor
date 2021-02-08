import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import PasswordForgetPage from "../components/PasswordForget";
import MainViewPage from "../components/MainView";
import WorkPlan from "../components/WorkPlan";
import Cast from "../components/Cast";
import Reviews from "../components/Reviews";
import Regulations from "../components/Regulations";
import Contact from "../components/Contact";
import Chat from "../components/Chat";
import Info from "../components/Info";
// import { AuthProvider } from "../auth";
import PrivateRoute from "../components/PrivateRoute";
import firebase from "firebase";
import Navigation from "../components/Navigation";
import Admin from "../components/Admin";
import Users from "../components/Users";
import AdminInfo from "../components/AdminInfo";
import Register from "../views/Register";
import Login from "../views/Login";
// import * as ROUTES from "../constans/routes";
import { routes } from "../components/constans/routes";
import AppContext from "../context";
import { auth } from "../firebase/firebaseConfig";
import MainTemplate from "../templates/MainTemplate";
import UnloggedUserTemplate from "../templates/UnloggedUserTemplate";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user.uid);
        localStorage.setItem("currentUser", user.uid);
      } else {
        setCurrentUser(null);
        localStorage.removeItem("currentUser");
      }
    });
  }, [currentUser]);

  useEffect(() => {
    //wysyłanie powiadomień cloud messaging //nie działa!
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
      console.log("onMessage", payload);
    });
  }, []);

  return (
    <AppContext.Provider value={{ currentUser }}>
      {currentUser ? <MainTemplate /> : <UnloggedUserTemplate />}

  
        {/* <Route exact path={routes.home} component={Navigation} />
        <Route path={routes.workplan} component={WorkPlan} />
        <Route path="/cast" component={Cast} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/regulations" component={Regulations} />
        <Route path="/contact" component={Contact} />
        ​<Route path="/chat" component={Chat} />
        <Route exact path="/admin" component={Admin} />
        <Route path="/info" component={Info} />
        <Route path="/users" component={Users} />
        <Route path="/admin-info" component={AdminInfo} /> */}
      {/* // </Switch> */}
    </AppContext.Provider>
  );
};

// export default withAuthentication(App);
export default App;

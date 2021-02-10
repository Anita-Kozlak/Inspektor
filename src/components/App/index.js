import { Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import WorkPlan from "../WorkPlan";
import Regulations from "../Regulations";
import Contact from "../Contact";
import Chat from "../Chat";
import Info from "../Info";
import firebase from "firebase";
import Admin from "../Admin";
import Cast from "../Cast";
import Users from "../Users";
import AdminInfo from "../AdminInfo";
import AdminWorkPlan from "../AdminWorkPlan";
import { routes } from "../constans/routes";
import AppContext from "../../context";
import { auth } from "../../firebase/firebaseConfig";
import UnloggedUserTemplate from "../../templates/UnloggedUserTemplate";
import { usersListCollection } from "../../firebase/firebaseUtils";
import Pending from "../../templates/Pending";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        usersListCollection
          .doc(user.uid)
          .get()
          .then((user) => {
            console.log(user.data());
            setCurrentUser(user.data());
            localStorage.setItem("currentUser", JSON.stringify(user.data()));
          });
      } else {
        setCurrentUser(null);
        localStorage.removeItem("currentUser");
      }
    });
  }, []);

  useEffect(() => {
    const subscribe = usersListCollection.onSnapshot((snapshot) => {
      const dataFromUsersListCollection = snapshot.docs.map((doc) => {
        return {
          ...doc.data(),
        };
      });
      setUsers([...dataFromUsersListCollection]);
    });

    return () => subscribe;
  }, []);

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
    <AppContext.Provider value={{ currentUser, users }}>
      {currentUser ? <Pending /> : <UnloggedUserTemplate />}
      ​<Route path={routes.chat} component={Chat} />
      <Route path={routes.workplan} component={WorkPlan} />
      <Route path={routes.regulations} component={Regulations} />
      <Route path={routes.contact} component={Contact} />
      <Route exact path="/admin" component={Admin} />
      <Route path={routes.info} component={Info} />
      <Route path={routes.users} component={Users} />
      <Route path={routes.cast} component={Cast} />
      <Route path="/admin-info" component={AdminInfo} />
      <Route path="/admin-work-plan" component={AdminWorkPlan} />
      {/* // </Switch> */}
    </AppContext.Provider>
  );
};

// export default withAuthentication(App);
export default App;

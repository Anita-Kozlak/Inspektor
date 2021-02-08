// import MainViewPage from "../MainView";
// import Login from "../../views/Login";
// import React, { useState, useEffect } from "react";
// import { firebase } from "../../firebase/firebaseConfig";

// const Navigation = () => {
//   const [userLogged, setUserLogged] = useState(false); // it keep tracks of user login status
//   useEffect(() => {
//     const authListener = firebase.auth().onAuthStateChanged((user) => {
//       setUserLogged(user ? true : false);
//     });
//     return authListener;
//   }, []);
//   return <div>{userLogged ? <NavigationAuth /> : <NavigationNonAuth />}</div>;
// };

// const NavigationAuth = () => (
//   <ul>
//     <MainViewPage />
//   </ul>
// );
// const NavigationNonAuth = () => (
//   <ul>
//     <Login />
//   </ul>
// );

// export default Navigation;

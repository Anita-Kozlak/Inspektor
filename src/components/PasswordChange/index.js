
  
import React from "react";
import { useState } from "react";
import firebase from "../Firebase/firebase";
import {Link} from "react-router-dom";

const PasswordChange = (props) => {

    // const [msg, setMsg] = useState('')
    const [email, setEmail] = useState('');

    const onChange = async (e) => {
      const auth = firebase.auth();
      const emailAddress = email;
      e.preventDefault();

      auth
        .sendPasswordResetEmail(emailAddress)
        .then(function () {

          console.log("hasło wysłane");
        })
        .catch(function (error) {
          console.log("błąd");
        });

        // setMsg("Sprawdz swoją skrzynkę mailową");

    };

  return (
    <div className="formContainer">
      <div className="container">
        <Link to="/">
          <img
            src="https://www.wroclaw.pl/go/download/img-10cc299f0a18003d189e670bcd9cb8a4/nfm-jpg.jpg"
            alt=""
          />
          <h1 className="heading">Inspektor</h1>
        </Link>
      </div>

      <form onSubmit={e => e.pre}>
        <h1>
          Zmień hasło <br></br>
        </h1>
        <h6>(wpisz swój email, a otrzymasz maila resetującego hasło)</h6>
        <input
          name="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn" onClick={onChange}>
          wyślij
        </button>
        {/* <span>{msg}</span> */}
      </form>
    </div>
  );
};

export default PasswordChange;

// import React from "react";
// import Input from "@material-ui/core/Input";
// import Button from "@material-ui/core/Button";
// import { useState } from "react";
// import firebase from "./firebase";

// const PasswordChange = () => {
//   const [email, setEmail] = useState("");

//   const onChange = async () => {
//     var auth = firebase.auth();
//     var emailAddress = email;

//     auth
//       .sendPasswordResetEmail(emailAddress)
//       .then(function () {
//         console.log("hasło wysłane");
//       })
//       .catch(function (error) {
//         console.log("błąd");
//       });
//   };
//   return (
//     <div className="changePassword">
//       <h1>
//         Zmień hasło <br></br>
//         <h4>(wpisz swój email, otrzymasz maila resetującego hasło)</h4>
//       </h1>
//       <form>
//         <label>Email użytkownika:</label>
//         <input
//           name="text"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button className="btn" onClick={onChange}>Wyślij</button>
//       </form>
//     </div>
//   );
// };

// export default PasswordChange;
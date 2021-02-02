
import React from "react";
import { useState } from "react";
import firebase from "../Firebase/firebase";
import {Link} from "react-router-dom";
import Image from "../../assets/images/nfm.jpg";


const PasswordChange = () => {

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


    };

  return (
    <div className="formContainer">
      <div className="container">
        <Link to="/">
          <img
            src={Image}
            alt=""
          />
          <h1 className="heading">Inspektor</h1>
        </Link>
      </div>

      <form onSubmit={e => e.preventDefault()}>
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
      </form>
    </div>
  );
};

export default PasswordChange;
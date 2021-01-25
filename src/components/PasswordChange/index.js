
  
import React from "react";
import { useState } from "react";
import firebase from "../Firebase/firebase";
import {Link} from "react-router-dom";

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
            src="https://www.wroclaw.pl/go/download/img-10cc299f0a18003d189e670bcd9cb8a4/nfm-jpg.jpg"
            alt=""
          />
          <h1 className="heading">Inspektor</h1>
        </Link>
      </div>

      <form onSubmit={e => e.preventDefault()}>
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
      </form>
    </div>
  );
};

export default PasswordChange;
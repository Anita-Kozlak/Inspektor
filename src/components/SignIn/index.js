/* eslint no-useless-escape: 0 */
import React, { useState } from "react";
import firebase from "../Firebase/firebase";
import { useForm } from "react-hook-form";
import SignUpLink from "../Link/SignUpLink";
import PasswordForgetLink from "../Link/PaswordForgetLink";
import Image from "../../assets/images/nfm.jpg";


const SignInPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { handleSubmit, register, errors } = useForm();
    const onSubmit = (values) => {
      return values;
    }
    const onLogin = async () => {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        console.log(error);
        setError("Hasło lub email jest nieprawidłowy")
      } 
    };

  return (
    <div className="formContainer">
      <div className="container">
        <img
          src={Image}
          alt=""
        />
        <h1 className="heading">Inspektor</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="email"
          ref={register({
            required: "Email jest wymagany!",
            pattern: {
              value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Podany email jest nieparwidłowy!",
            },
          })}
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>
          {errors.email && errors.email.message}
          <br />
        </span>
        <input
          ref={register({
            required: true,
          })}
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <div>
            {errors.password.type === "required" && (
              <span>Hasło jest wymagane!</span>
            )}
            {errors.password.type === "minLength" && (
              <span>Hasło jest za krótkie! </span>
            )}
          </div>
        )}
        {error && <span>{error}</span>}

        <button onClick={onLogin} className="btn" type="submit">
          Zaloguj się
        </button>
        <PasswordForgetLink />
        <SignUpLink />
      </form>
    </div>
  );
};


export default SignInPage;

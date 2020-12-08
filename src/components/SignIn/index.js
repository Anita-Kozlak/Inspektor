/* eslint no-useless-escape: 0 */
import React, { useState } from "react";
import firebase from "../Firebase/firebase";
import { useForm } from "react-hook-form";
import SignUpLink from "../Link/SignUpLink";
import PasswordForgetLink from "../Link/PaswordForgetLink";

const SignInPage = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const { handleSubmit, register, errors } = useForm();
    const onSubmit = (values) => console.log(values);

    const onLogin = async () => {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        props.history.push("/mainview");
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className="formContainer">
      <div className="container">
        <img
          src="https://www.wroclaw.pl/go/download/img-10cc299f0a18003d189e670bcd9cb8a4/nfm-jpg.jpg"
          alt=""
        />
        <h1 className="heading">Inspektor</h1>
      </div>
      <div></div>
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>
          {errors.email && errors.email.message}
          <br />
        </span>
        <input
          ref={register({
            required: true,
            // minLength: 6,
          })}
          name="password"
          type="password"
          autoComplete="current-password"
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

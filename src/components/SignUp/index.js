/* eslint no-useless-escape: 0 */

import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../Firebase/firebase";
import { sameAs } from "../../Helpers/validators";
import { useForm } from "react-hook-form";

const SignUpPage = (props) => {

  const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("")

  const { handleSubmit, register, errors, getValues } = useForm();

    const onSubmit = (values) => {
      return values;
    };
    const onRegister= async () => {

      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        props.history.push("/mainview");
      } catch (error) {
        console.log(error);
      }
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
      <form className="signUp" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__registerGrey">
          {/* <label>Imię i Nazwsko</label>
          <input
            ref={register({ required: "Imię i nazwisko jest wymagane" })}
            name="name"
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span>
            {errors.name}
            <br />
          </span> */}
          <input
            name="email"
            ref={register({
              required: "Email jest wymagany!",
              pattern: {
                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Podany email jest nieprawidłowy!",
              },
            })}
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>
            {errors.email && errors.email.message}
          </span>
          <input
            ref={register({ required: true, minLength: 6 })}
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
          <input
            ref={register({
              required: true,
              minLength: 6,
              validate: { sameAs: sameAs(getValues, "password") },
            })}
            name="passwordConfirmation"
            type="password"
            placeholder="Powtórz hasło"
            autoComplete="current-password"
          />
          {errors.passwordConfirmation && (
            <div className="form-error">
              {errors.passwordConfirmation.type === "required" && (
                <span>Hasło jest wymagane! </span>
              )}
              {errors.passwordConfirmation.type === "minLength" && (
                <span>Hasło jest za krótkie!</span>
              )}
              {errors.passwordConfirmation.type === "sameAs" && (
                <span>Hasło musi być takie samo!</span>
              )}
            </div>
          )}
        </div>
        <button className="btn" onClick={onRegister} type="submit">
          Zarejestruj się
        </button>
      </form>
    </div>
  );
};


export default SignUpPage

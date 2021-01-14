/* eslint no-useless-escape: 0 */

import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../Firebase/firebase";
import { sameAs } from "../../Helpers/validators";
import { useForm } from "react-hook-form";

const db = firebase.firestore();



  
const SignUpPage = (props) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("")
 const { handleSubmit, register, errors, getValues } = useForm();

 const onSubmit = (values) => {
   return values;
 };


 
  const onRegister = async () => {
     
    const createUserProfile = (userProfile) =>
    db.collection("profile").doc(userProfile.uid).set(userProfile);
     
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

      
    const { user } = res;
      props.history.push("/mainview");
    const userProfile = { uid: user.uid, name, email }


     firebase.auth().currentUser
       .sendEmailVerification()
       .then(function () {
         // Email sent.
       })
       .catch(function (error) {
         // An error happened.
       });

    await createUserProfile(userProfile);
    return userProfile;
  } catch(error) {
    setError("Błędne dane lub konto już istnieje w systemie");
    return Promise.reject(error.message)
    
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
          <input
            ref={register({ required: true, minLength: 6 })}
            name="name"
            type="name"
            placeholder="Imię i Nazwisko"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && (
            <div>
              {errors.name.type === "required" && (
                <span>Imię i Nazwisko jest wymagane!</span>
              )}
              {errors.name.type === "minLength" && (
                <span>Imię i Nazwisko jest za krótkie! </span>
              )}
            </div>
          )}
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
          <span>{errors.email && errors.email.message}</span>
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
                <span>Hasło powinno mieć minimum 6 znaków! </span>
              )}
            </div>
          )}
          <span>{error}</span>
          {/* <input
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
                <span>Hasło powinno mieć minimum 6 znaków!</span>
              )}
              {errors.passwordConfirmation.type === "sameAs" && (
                <span>Hasło musi być takie samo!</span>
              )}
            </div>
          )} */}
        </div>
        <button className="btn" onClick={onRegister} type="submit">
          Zarejestruj się
        </button>
      </form>
    </div>
  );
};


export default SignUpPage

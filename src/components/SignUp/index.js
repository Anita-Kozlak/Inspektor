import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../Firebase/firebase";
import { sameAs } from "../../Helpers/validators";
import { useForm } from "react-hook-form";


const SignUpPage = () => {
    return (
      <div>
        <SignUpFormBase />
      </div>
    );

}



const SignUpFormBase = (props) => {

  const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

  const { handleSubmit, register, errors, getValues } = useForm();
  const onSubmit = (values) => console.log(values);

  const onRegister = async () => {
    const users = firebase.database().ref("users");

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      users.push(email);
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
          <label>Email</label>
          <input
            name="email"
            ref={register({
              required: "Email jest wymagany!",
              pattern: {
                value: /S+@S+.S+/,
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
          <label>Hasło</label>
          <input
            ref={register({ required: true, minLength: 6 })}
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

          <label>Powtórz hasło</label>
          <input
            ref={register({
              required: true,
              minLength: 6,
              validate: { sameAs: sameAs(getValues, "password") },
            })}
            name="passwordConfirmation"
            className="input is-large"
            type="password"
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
                <span>Hasło musi być takie same!</span>
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

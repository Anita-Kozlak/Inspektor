import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import NFMIcon from "../NFMIcon";
import SignUpLink from "../Link/SignUpLink";
import PasswordForgetLink from "../Link/PaswordForgetLink";
import { auth } from "../../firebase/firebaseConfig";

//rafce

const loginValid = Yup.object().shape({
  email: Yup.string()
    .required("Email jest wymagany!")
    .email("Email musi być poprawny!"),
  password: Yup.string()
    .required("Hasło jest wymagane!")
    .min(6, "Hasło musi mieć min. 6 znaków!"),
});

const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginValid}
      onSubmit={(values, { resetForm }) => {
        console.log(values);

        auth
          .signInWithEmailAndPassword(values.email, values.password)
          .then(() => alert("Zalogowano"))
          .catch((err) => alert(err));

        resetForm();
      }}
    >
      {() => (
        <div className="formContainer">
          <NFMIcon />
          <Form>
            <div className="form__registerGrey">
              <Field
                className="inputForm"
                type="email"
                placeholder="Email"
                name="email"
              />
              <div className="formError">
                <ErrorMessage name="email" />
              </div>
              <Field
                className="inputForm"
                type="password"
                placeholder="Hasło"
                name="password"
              />
              <div className="formError">
                <ErrorMessage name="password" />
              </div>

              <button className="btn" type="submit">
                Zaloguj
              </button>
            </div>
            <PasswordForgetLink />
            <SignUpLink />
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default LoginForm;

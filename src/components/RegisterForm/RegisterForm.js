import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import NFMIcon from "../NFMIcon";
import { auth } from "../../firebase/firebaseConfig";
import SignInLink from "../Link/SignInLink"
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

//rafce

const registerValid = Yup.object().shape({
  nameAndSurname: Yup.string()
    .required("Imię i nazwisko jest wymagane!")
    .min(3, "Imie i nazwisko musi miec min. 3 znaki"),
  email: Yup.string()
    .required("Email jest wymagany!")
    .email("Email musi być poprawny"),
  phoneNumber: Yup.number()
    .required("Numer telefonu jest wymagany!")
    .typeError("Numer telefonu musi być poprawny"),
  password: Yup.string()
    .required("Hasło jest wymagane!")
    .min(6, "Hasło musi mieć min. 6 znaków"),
  acceptTerms: Yup.bool().oneOf(
    [true],
    "Proszę zaakceptować polikę prywatności!",
  ),
});

const RegisterForm = () => {
  return (
    <Formik
      initialValues={{
        nameAndSurname: "",
        email: "",
        password: "",
        phoneNumber: "",
        acceptTerms: false,
      }}
      validationSchema={registerValid}
      onSubmit={(values, { resetForm }) => {
        console.log(values);

        auth
          .createUserWithEmailAndPassword(values.email, values.password)
          .then(() => alert("Zarejestrowano"))
          .catch((err) => alert("Adres Email jest używany na innym koncie"));

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
                type="text"
                placeholder="Imię i nazwisko"
                name="nameAndSurname"
              />
              <div className="formError">
                <ErrorMessage name="nameAndSurname" />
              </div>
              <Field
                className="inputForm"
                type="email"
                placeholder="Email"
                name="email"
              />
              <div className="formError">
                <ErrorMessage name="email" />
              </div>
              {/* <div className="inputForm">
                <PhoneInput
                  country={"pl"}
                  regions={"europe"}
                  placeholder="Numer telefonu"
                  type="phoneNumber"
                  name="phoneNumber"
                />
              </div>
              <div className="formError">
                <ErrorMessage name="phoneNumber" />
              </div> */}
              <Field
                className="inputForm"
                type="phoneNumber"
                placeholder="Numer telefonu"
                name="phoneNumber"
              />
              <div className="formError">
                <ErrorMessage name="phoneNumber" />
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
              <div className="checkboxForm">
                <Field
                  className="checkbox"
                  type="checkbox"
                  name="acceptTerms"
                  id="acceptTerms"
                />
                <label htmlFor="acceptTerms">
                  Zaakcpetuj politykę prywatności{" "}
                </label>
              </div>
              <div className="formError">
                <ErrorMessage className="formError" name="acceptTerms" />
              </div>

              <button className="btn" type="submit">
                zarejestruj
              </button>
            </div>
            <SignInLink />
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default RegisterForm;

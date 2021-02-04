import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
//rafce

const registerValid = Yup.object().shape({
  nameAndSurname: Yup.string()
    .required("Imie i nazwisko jest wymagane!")
    .min(3, "Imie i nazwisko musi miec min. 3 znaki"),
  email: Yup.string()
    .required("Email jest wymagany")
    .email("Email musi być poprawny"),
  password: Yup.string().required("Hasło jest wymagane"),
  acceptTerms: Yup.bool().oneOf(
    [true],
    "Proszę zaakceptować polikę prywatności",
  ),
});

const RegisterForm = () => {
  return (
    <Formik
      initialValues={{
        nameAndSurname: "",
        email: "",
        password: "",
        acceptTerms: false,
      }}
      validationSchema={registerValid}
      onSubmit={(values, { resetForm }) => {
        console.log(values);

        resetForm();
      }}
    >
      {() => (
        <Form>
          <Field
            type="text"
            placeholder="Imię i nazwisko"
            name="nameAndSurname"
          />
          <div style={{ color: "white" }}>
            <ErrorMessage name="nameAndSurname" />
          </div>
          <Field type="email" placeholder="Email" name="email" />
          <div style={{ color: "white" }}>
            <ErrorMessage name="email" />
          </div>

          <Field type="password" placeholder="password" name="password" />
          <div style={{ color: "white" }}>
            <ErrorMessage name="password" />
          </div>

          <label htmlFor="acceptTerms">Zaakcpetuj politykę prywatności: </label>
          <Field type="checkbox" name="acceptTerms" id="acceptTerms" />
          <div style={{ color: "white" }}>
            <ErrorMessage name="acceptTerms" />
          </div>

          <button type="submit">zarejestruj</button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;

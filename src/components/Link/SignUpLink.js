import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../constans/routes";

const SignUpLink = () => {
  return (
    <p style={{ color: "#d9d9d9" }} className="link">
      Nie masz konta?{" "}
      <Link
        to={routes.regiser}
        style={{ textDecoration: "none", color: "rgb(125, 91, 58)" }}
      >
        Zarejestruj się
      </Link>
    </p>
  );
};

export default SignUpLink;

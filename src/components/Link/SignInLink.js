import React from 'react'
import { Link } from "react-router-dom";
import { routes } from "../constans/routes";

const SignInLink = () => {
    return (
        <div style={{ color: "#d9d9d9" }} className="link">
          Masz konto?  {" "}
          <Link
            to={routes.login}
            style={{ textDecoration: "none", color: "rgb(125, 91, 58)" }}
          >
            Zaloguj się
          </Link>
        </div>
    );
}

export default SignInLink

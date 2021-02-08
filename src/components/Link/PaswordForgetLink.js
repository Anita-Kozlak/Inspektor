import { Link } from "react-router-dom";
import React from "react";
import { routes } from "../constans/routes";

const PasswordForgetLink = () => {
  return (
    <p className="link">
      <Link
        to={routes.passwordForgetPage}
        style={{ textDecoration: "none", color: "rgb(125, 91, 58)" }}
      >
        Zapomniałeś hasła?
      </Link>
    </p>
  );
};

export default PasswordForgetLink;

import { Link } from "react-router-dom";
import React from "react";

const PasswordForgetLink = () => {
  return (
    <p className="link">
      <Link
        to='/pw-forget'
        style={{ textDecoration: "none", color: "rgb(125, 91, 58)" }}
      >
        Zapomniałeś hasła?
      </Link>
    </p>
  );
};

export default PasswordForgetLink;

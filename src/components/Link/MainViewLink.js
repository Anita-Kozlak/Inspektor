import { Link } from "react-router-dom";
import React from "react";

const MainViewLink = () => {
  return (
    <p>
      <Link to="/">
        <button className="nav" type="button">
          Strona Główna
        </button>
      </Link>
    </p>
  );
};

export default MainViewLink;

import {Link} from "react-router-dom";
import React from "react";

const Info = () => {
    return (
      <>
        <Link to="/mainview">
          <span className="close" />
        </Link>
        <p style={{ color: "white" }}>Nie ma teraz ważnych informacji</p>
      </>
    );
}
export default Info;
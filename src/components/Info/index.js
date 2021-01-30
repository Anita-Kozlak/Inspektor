import React from "react";
import MainViewLink from "../Link/MainViewLink";
import SignOutButton from "../SignOut";

const Info = () => {
    return (
      <>
        <div className="buttons">
          <MainViewLink />
          <SignOutButton />
        </div>
        <p style={{ color: "white", textAlign: "center" }}>Informacje dodane przez Admina</p>
      </>
    );
}
export default Info;
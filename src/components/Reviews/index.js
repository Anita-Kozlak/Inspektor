import React from "react";
import MainViewLink from "../Link/MainViewLink";
import SignOutButton from "../SignOut";
const Reviews = () => {

    return (
      <>
        <div className="buttons">
          <MainViewLink />
          <SignOutButton />
        </div>
        <div className="reviewsContainer">
          <div className="reviewsList">
            <a href="http://nfm.wroclaw.pl/orkiestra/Recenzje%202019-2020/recenzja%202019.09.30-10.04%20Guerrero.html">
              Recenzja 30.09.2019r - 04.10.2019r- G. Guerrero{" "}
            </a>
            <a href="http://nfm.wroclaw.pl/orkiestra/Recenzje%202019-2020/recenzja%202019.10.21-25%20Farkas.html">
              Recenzja 21-25.10.2019r - R. Farkas{" "}
            </a>
          </div>
        </div>
      </>
    );
}
export default Reviews;
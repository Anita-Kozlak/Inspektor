import React  from "react";
import MainViewLink from "../Link/MainViewLink";
import SignOutButton from "../SignOut";
import Notices from "../Notices"


const Info = () => {

 

    return (
      <div>
        <div className="buttons">
          <MainViewLink />
          <SignOutButton />
        </div>
        <div className="notices">
          <Notices />
        </div>
      </div>
    );
}
export default Info;
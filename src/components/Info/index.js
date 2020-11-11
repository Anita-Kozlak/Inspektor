import {Link} from "react-router-dom";
import React from "react";
import * as ROUTES from "../../constants/routes";

const Info = () => {
    return (
        <>
            <Link to={ROUTES.MAIN_VIEW}><span className="close" /></Link>
            <p style={{color: "white"}}>nic nie wyświtla</p>
        </>
    )
}
export default Info;
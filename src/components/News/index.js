import {Link} from "react-router-dom";
import React from "react";
import * as ROUTES from "../../constants/routes";

const News = () => {
    return (
        <>
            <Link to={ROUTES.MAIN_VIEW}><a href="#" className="close" /></Link>
            <p>nic się nie chce wyswitlic</p>

        </>
    )
}
export default News;
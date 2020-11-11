import React from "react";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Reviews = () => {

    return (
        <div className="reviewsContainer">
            <Link to={ROUTES.MAIN_VIEW}><span className="close" /></Link>
            <div className="reviewsList">
                <a href="http://nfm.wroclaw.pl/orkiestra/Recenzje%202019-2020/recenzja%202019.09.30-10.04%20Guerrero.html">Recenzja 30.09.2019r - 04.10.2019r- G. Guerrero </a>
                <a href="http://nfm.wroclaw.pl/orkiestra/Recenzje%202019-2020/recenzja%202019.10.21-25%20Farkas.html">Recenzja 21-25.10.2019r - R. Farkas </a>
            </div>
        </div>
    )
}
export default Reviews;
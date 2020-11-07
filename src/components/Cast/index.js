import React from "react";
import * as ROUTES from "../../constants/routes";
import {Link} from "react-router-dom";

const Cast= () => {
    return (
        <>
            <Link to={ROUTES.MAIN_VIEW}><a href="#" className="close" /></Link>
            <p className="castHeading">skład orkiestry</p>
            <div className="container">
                <div className="plans">
                    <div className="weeks">
                        <div className="view">wrzesień</div>
                        <Link to={ROUTES.CAST_FIRST_WEEK} style={{textDecoration: "none", color: "black"}}><h2 className="week">1-5.09.2020</h2> </Link>
                        <h2 className="week">2 tydzień</h2>
                        <h2 className="week">3 tydzień</h2>
                        <h2 className="week">4 tydzień</h2>
                    </div>
                    <div className="weeks">
                        <div className="view">październik</div>
                        <h2 className="week">1 tydzień</h2>
                        <h2 className="week">2 tydzień</h2>
                        <h2 className="week"> 3 tydzień</h2>
                        <h2 className="week">4 tydzień</h2>
                    </div>
                    <div className="weeks">
                        <div className="view">listopad</div>
                        <h2 className="week">1 tydzień</h2>
                        <h2 className="week">2 tydzień</h2>
                        <h2 className="week"> 3 tydzień</h2>
                        <h2 className="week">4 tydzień</h2>
                    </div>
                    <div className="weeks">
                        <div className="view">grudzień</div>
                        <h2 className="week">1 tydzień</h2>
                        <h2 className="week">2 tydzień</h2>
                        <h2 className="week"> 3 tydzień</h2>
                        <h2 className="week">4 tydzień</h2>
                    </div>
                    {/*    <div className="weeks">*/}
                    {/*        <div className="view">styczeń</div>*/}
                    {/*        <h2 className="week">1 tydzień</h2>*/}
                    {/*        <h2 className="week">2 tydzień</h2>*/}
                    {/*        <h2 className="week">3 tydzień</h2>*/}
                    {/*        <h2 className="week">4 tydzień</h2>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="plans">*/}
                    {/*    <div className="weeks">*/}
                    {/*        <div className="view">luty</div>*/}
                    {/*        <h2 className="week">1 tydzień</h2>*/}
                    {/*        <h2 className="week">2 tydzień</h2>*/}
                    {/*        <h2 className="week">3 tydzień</h2>*/}
                    {/*        <h2 className="week">4 tydzień</h2>*/}
                    {/*    </div>*/}
                    {/*    <div className="weeks">*/}
                    {/*        <div className="view ">marzec</div>*/}
                    {/*        <h2 className="week">1 tydzień</h2>*/}
                    {/*        <h2 className="week">2 tydzień</h2>*/}
                    {/*        <h2 className="week">3 tydzień</h2>*/}
                    {/*        <h2 className="week">4 tydzień</h2>*/}
                    {/*    </div>*/}
                    {/*    <div className="weeks">*/}
                    {/*        <div className="view">kwiecień</div>*/}
                    {/*        <h2 className="week">1 tydzień</h2>*/}
                    {/*        <h2 className="week">2 tydzień</h2>*/}
                    {/*        <h2 className="week"> 3 tydzień</h2>*/}
                    {/*        <h2 className="week">4 tydzień</h2>*/}
                    {/*    </div>*/}
                    {/*    <div className="weeks">*/}
                    {/*        <div className="view ">maj</div>*/}
                    {/*        <h2 className="week">1 tydzień</h2>*/}
                    {/*        <h2 className="week">2 tydzień</h2>*/}
                    {/*        <h2 className="week"> 3 tydzień</h2>*/}
                    {/*        <h2 className="week">4 tydzień</h2>*/}
                    {/*    </div>*/}
                    {/*    <div className="weeks">*/}
                    {/*        <div className="view ">czerwiec</div>*/}
                    {/*        <h2 className="week">1 tydzień</h2>*/}
                    {/*        <h2 className="week">2 tydzień</h2>*/}
                    {/*        <h2 className="week"> 3 tydzień</h2>*/}
                    {/*        <h2 className="week">4 tydzień</h2>*/}
                    {/*    </div>*/}
                </div>
            </div>
        </>
    )
}


export default Cast;
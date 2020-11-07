import React from "react";
import {Link} from "react-router-dom";
import * as ROUTES from "../../../constants/routes";
const FirstWeek = () => {
    return (
        <div className="firstWeek">
            <Link to={ROUTES.WORK_PLAN}><a href="#" className="close" /></Link>
            <h2 className="planWorkHeading">PLAN PRACY</h2>
            <table>
            <thead>
            <tr>
                <th>dzień</th>
                <th>godzina</th>
                <th>sala</th>
                <th>dyrygent</th>
                <th>orkiestra</th>
                <th>program</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1.09.2020r Poniedziałek</td>
                    <td>9.30 - 12.45</td>
                    <td>Główna NFM</td>
                    <td>Gabriel Chmura</td>
                    <td>tutti</td>
                    <td>W.A.Mozart- koncert klarnetowy <br></br>
                        W.A.Mozart- Msza
                    </td>
                </tr>
                <tr>
                    <td>2.09.2020r Wtorek</td>
                    <td>9.30 - 12.45</td>
                    <td>Główna NFM</td>
                    <td>Gabriel Chmura</td>
                    <td>tutti</td>
                    <td>W.A.Mozart- koncert klarnetowy <br></br>
                        W.A.Mozart- Msza
                    </td>
                </tr>
                <tr>
                    <td>3.09.2020r Środa</td>
                    <td>9.30 - 12.45</td>
                    <td>Główna NFM</td>
                    <td>Gabriel Chmura</td>
                    <td>tutti</td>
                    <td>W.A.Mozart- koncert klarnetowy <br></br>
                        W.A.Mozart- Msza
                    </td>
                </tr>
                <tr>
                    <td>4.09.2020r Czwartek</td>
                    <td>9.30 - 12.45</td>
                    <td>Główna NFM</td>
                    <td>Gabriel Chmura</td>
                    <td>tutti</td>
                    <td>W.A.Mozart- koncert klarnetowy <br></br>
                        W.A.Mozart- Msza
                    </td>
                </tr>
                <tr>
                    <td>5.09.2020r Piątek</td>
                    <td>
                       9.30-12.45
                      19.00 - Koncert
                    </td>
                    <td>Główna NFM</td>
                    <td>Gabriel Chmura</td>
                    <td>tutti</td>
                    <td>W.A.Mozart- koncert klarnetowy <br></br>
                        W.A.Mozart- Msza
                    </td>
                </tr>
            </tbody>
        </table>
            </div>
    )
}
export default FirstWeek;
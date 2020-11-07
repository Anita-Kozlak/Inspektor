import React from "react";
import {Link} from "react-router-dom";
import * as ROUTES from "../../../constants/routes";

const CastFirstWeek = () => {
    return (
        <div className="castFirstWeek">
            <Link to={ROUTES.MAIN_VIEW}><a href="#" className="close" /></Link>

            <h2 className="castHeading">skład orkiestry</h2>
            <table>
                <thead>
                <tr>
                    <th className="instrument">I skrzypce</th>
                    <th className="instrument">II skrzypce</th>
                    <th className="instrument">Altówka</th>
                    <th className="instrument">Wiolonczela</th>
                    <th className="instrument">Kontrabas</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1. Radosław Pujanek</td>
                        <td>1. Wojciech Hazuka</td>
                        <td>1. Artur Tokarek</td>
                        <td>1. Maciej Młodawski</td>
                        <td>1. Janusz Musiał</td>
                    </tr>
                    <tr>
                        <td>2. Marcin Danilewski</td>
                        <td>2. Tomasz Bolsewicz</td>
                        <td>2. Artur Rozysłowicz</td>
                        <td>2. Maciej Kłopocki</td>
                        <td>2. Damian Kalla</td>
                    </tr>
                    <tr>
                        <td>3. Bartosz Bober</td>
                        <td>3. Wioletta Porębska</td>
                        <td>3. Magdalena Dobosz</td>
                        <td>3. Wojciech Fudala</td>
                        <td>3. Jacek Sosna</td>
                    </tr>
                    <tr>
                        <td>4. Darek Blicharski</td>
                        <td>4. Tomasz Kwieciński</td>
                        <td>4. Wiktor Rudzik</td>
                        <td>4. Jan Skopowski</td>
                        <td>4. Czesław Kurtok</td>
                    </tr>
                    <tr>
                        <td>5. Anita Koźlak</td>
                        <td>5. Wojciech Bolsewicz</td>
                        <td>5. Ewa Hofman</td>
                        <td>5. Miłosz Drogowski</td>
                        <td>5. Marek Politański</td>
                    </tr>
                    <tr>
                        <td>6. Malwina Kotz</td>
                        <td>6. Liliana Blicharska</td>
                        <td>6. Wojciech Koczur</td>
                        <td>6. Sylwia Matuszyńska</td>
                        <td>6. Jan Galik</td>
                    </tr>
                </tbody>
                    <thead>
                    <br /><br /> <br /><br />
                    <br /><br /> <br /><br />
                    <tr>
                        <th className="instrument">Flet</th>
                        <th className="instrument">Obój</th>
                        <th className="instrument">Rożek angielski</th>
                        <th className="instrument">Klarnet</th>
                        <th className="instrument">Fagot</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>

                        <td>1. Jan Krzeszowiec</td>
                        <td>1. Wojciech Merena</td>
                        <td>1. Stefan Małek</td>
                        <td>1. Maciej Dobosz</td>
                        <td>1. Alicja Kieruzalska</td>
                    </tr>
                    <tr>
                        <td>2. Małgorzata Świętoń</td>
                        <td>2. Justyna Stanek</td>
                        <td></td>
                        <td>2. Michał Siciński</td>
                        <td>2. Katarzyna Zdybel-Nam</td>
                    </tr>
                    <tr>
                        <td>3. Henryk Rymarczuk </td>
                        <td></td>
                        <td></td>
                        <td>3. Mariola Molczyk</td>
                        <td>3. Józef Czichy</td>
                    </tr>
                    </tbody>
                <br /><br /> <br /><br />
                <br /><br /> <br /><br />
                <thead>
                <tr>
                    <th className="instrument">Trąbka</th>
                    <th className="instrument">Waltornia</th>
                    <th className="instrument">Puzon</th>
                    <th className="instrument">Tuba</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1. Aleksander Kobus</td>
                    <td>1. Mateusz Feliński</td>
                    <td>1. Eloy Panizo</td>
                    <td>1. Piotr Kosiński</td>
                </tr>
                <tr>
                    <td>2. Aleksander Zalewski</td>
                    <td>2. Lukasz Lacny</td>
                    <td>2. Paweł Maliczowski</td>
                </tr>
                <tr>
                    <td>3. Piotr Bugaj</td>
                    <td>3. Robert Wasik</td>
                    <td>3. Mariusz Syrowatko</td>

                </tr>
                <tr>
                    <td>4. Justyna Maliczowska</td>
                    <td>4. Czesław Czopka</td>

                </tr>
                </tbody>
                <br /><br /> <br /><br />
                <br /><br /> <br /><br />
                <thead>
                <tr>
                    <th className="instrument">Perkusja</th>
                    <th className="instrument">Kotły</th>
                    <th className="instrument">Harfa</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1. Miłosz Rutkowski</td>
                    <td>1. Diego Yanez Busto</td>
                    <td>1. Malwina Rozmysłowicz</td>
                </tr>
                <tr>
                    <td>2. Aleksandera Gołaj</td>
                    <td>2. Lukasz Lacny</td>
                </tr>
                <tr>
                    <td>3. Camille Bialas</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
export default CastFirstWeek;
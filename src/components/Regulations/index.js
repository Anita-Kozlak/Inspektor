import React from "react";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Regulation = () => {
    return (
        <div className="regulationsContainer">
             <Link to={ROUTES.MAIN_VIEW}><span className="close" /></Link>
                 <div className="regulationsList">
                    <a href="http://nfm.wroclaw.pl/orkiestra/Regulaminy/Obowi%C4%85zuj%C4%85ce/Regulamin%20Rady%20Artystycznej..pdf">Regulamin Rady Artystycznej</a>
                    <a href="http://nfm.wroclaw.pl/orkiestra/Regulaminy/Obowi%C4%85zuj%C4%85ce/Regulamin%20Zakladowego%20Funduszu%20%C5%9Awiadcze%C5%84%20Socjalnych.pdf">Regulamin Zakładowego Funduszu Świadczeń Socjalnych</a>
                    <a href="http://nfm.wroclaw.pl/orkiestra/Regulaminy/Obowi%C4%85zuj%C4%85ce/Regulamin_pracy_tekst_jednolity_22-2020.pdf">Regulamin Pracy</a>
                    <a href="http://nfm.wroclaw.pl/orkiestra/Regulaminy/Obowi%C4%85zuj%C4%85ce/Regulamin_pracy_Zarz%C4%85dzenie_zmieniaj%C4%85ce_22-2020.pdf">Regulamin Pracy- zmieniające zarządzenie nr 22/2020</a>
                    <a href="http://nfm.wroclaw.pl/orkiestra/Regulaminy/Obowi%C4%85zuj%C4%85ce/Regulamin_pracy_tekst_jednolity_22-2020.pdf">Załącznik Nr 1 do Zarządzenia Nr 22/2020 zmieniającego Zarządzenie nr 62/2016</a>
                    <a href="http://nfm.wroclaw.pl/orkiestra/Regulaminy/Obowi%C4%85zuj%C4%85ce/Regulamin_wynagradzania_tekst%20jednolity_21-2020.pdf">Regulamin wynagrodzenia</a>
                    {/* <a href="">Regulamin wynagrodzenia- zmieniające zarządzenie nr 61/2016</a> */}
                    <a href="http://nfm.wroclaw.pl/orkiestra/Regulaminy/Obowi%C4%85zuj%C4%85ce/160715_41_Zarz%C4%85dzenie%20Dyrektora_wydawanie%20i%20zdawanie%20kluczy%20do%20pomieszcze%C5%84.pdf">Zarządzenie w sprawie wprowadzenia Regulaminu wydawania i zdawania kluczy do pomieszczeń w Narodowym Forum Muzyki- zarządzenie nr 41/2015</a>
                     <a href="http://nfm.wroclaw.pl/orkiestra/170609_35%2C%20w%20sprawie%20wprowadzenia%20Regulaminu%20wydawania%20i%20korzystania%20z%20kart%20systemu%20kontroli%20dost%C4%99pu%20w%20NFM.pdf">Zarządzenie w sprawie wprowadzenia Regulaminu wydawania i korzystania z kart kontroli dostępu w NFM</a>
                    <a href="http://nfm.wroclaw.pl/orkiestra/Regulaminy/Obowi%C4%85zuj%C4%85ce/2020.03.25%20Zarzadzenie%20i%20Regulamin%20Organizacyjny%20NFM.pdf">Zarządzenie w sprawie wprowadzenia Regulaminu organizacyjnego Narodowego Forum Muyzki nr 11/2020</a>
                    <a href="http://nfm.wroclaw.pl/orkiestra/Regulaminy/Obowi%C4%85zuj%C4%85ce/2020.04.03%20Zarzadzenie%2012%20Ustalanie%20Plan%C3%B3w%20Pracy.pdf">Zarządzenie w sprawie ustalenia planów pracy pracowników zespołów artystycznych NFM nr 12/2020</a>
                    <a href="http://nfm.wroclaw.pl/orkiestra/Regulaminy/Polityka%20Bezpiecze%C5%84stwa%20danych%20NFM.pdf">Zarządzenie w sprawie wprowdzenia Polityki Bezpieczeństwa Danych w NFM</a>
                    {/* <a href="">Procedura przeprowadzenia konkursu na stanowsko</a> */}
            </div>
       </div>
    )

}
export default Regulation;
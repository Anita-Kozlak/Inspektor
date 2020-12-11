import React from "react";
import MainViewLink from "../Link/MainViewLink";
import SignOutButton from "../SignOut";

const Contact = () => {
    return (
      <>
        <div className="buttons">
        <MainViewLink />
        <SignOutButton />
      </div>
        <div className="contactContainer">
          <div className="contactList">
            <h2 className="contactName">
              Dyrektor Artystyczny- Giancarlo Guerrero
            </h2>
            <h3 className="contactTel">tel. kom. : +1 615 419 0359</h3>
            <h3 className="contactEmail">
              e-mail: giancarloguerrero1@gmail.com
            </h3>
            <h2 className="contactName">Inspektor Orkiestry- Jacek Sosna</h2>
            <h3 className="contactTel">tel. kom. : 728447004</h3>
            <h3 className="contactEmail">e-mail: jacek.sosna@nfm.wroclaw.pl</h3>
            <h2 className="contactName">
              Manager Orkiestry- Natalia Klingbajl
            </h2>
            <h3 className="contactTel">tel. kom. : 517818321</h3>
            <h3 className="contactEmail">
              e-mail: Natalia.Klingbajl@nfm.wroclaw.pl
            </h3>
            <h2 className="contactName">Konserwator- Krzysztof Frąk</h2>
            <h3 className="contactTel">tel. kom. : 661 497 982</h3>
            <h3 className="contactEmail">
              e-mail: kszysztof.frak@nfm.wroclaw.pl
            </h3>
          </div>
        </div>
      </>
    );
}
export default Contact;
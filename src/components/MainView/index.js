import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOut";
import { routes } from "../constans/routes";
import AppContext from "../../context";

const MainViewPage = () => {
  const context = useContext(AppContext);

  return (
    <div className="mainViewPage">
      {" "}
      <div className="buttons">
        {context.currentUser.admin ? (
          <Link to={routes.users}>
            <button className="nav">Użytkownicy</button>
          </Link>
        ) : null}
        <SignOutButton />
      </div>
      {/* <h2 className="welcome">Witaj, {context.currentUser.nameAndSurname}!</h2> */}
      <div className="mainView">
        <Link to={routes.workplan}>
          <h1 className="workPlan view">PLAN PRACY</h1>{" "}
        </Link>
        <Link to={routes.regulations}>
          <h1 className="regulations view">REGULAMINY</h1>
        </Link>
        <div className="cast view"></div>
        <a
          href="/Repertuar_sezonu.pdf"
          target="_blank"
          className="repertoire view"
        >
          <span> REPERTUAR SEZONU </span>
        </a>
        <Link to="/contact">
          <h1 className="contact view">
            {" "}
            <span> DANE KONTAKTOWE </span>
          </h1>
        </Link>
        <span className="reg view"></span>
        {context.currentUser.admin ? (
          <Link to={routes.admin}>
            <h1 className="admin view">ADMIN</h1>
          </Link>
        ) : null}
        <Link to={routes.info}>
          <h1 className="info view">Ogłoszenia</h1>
        </Link>
        <Link to={routes.chat}>
          <h1 className="messenger view">CHAT</h1>
        </Link>
        <a
          href="https://docs.google.com/spreadsheets/d/1BZlbu0sxWA2ZmI5bTj6Hoa7ob4TfEf-Bc919Cz0LuGM/edit?ts=56308a45#gid=844612180"
          target="_blank"
          rel="noopener noreferrer"
          className="availabilityOfWardrobes view"
        >
          Dostępność garderób
        </a>
        <div
          // href="https://docs.google.com/spreadsheets/d/1795vVAA3KHB0Zin4t_2UKf0EjQ7x5ZjIx6nA7m7SFEA/edit?ts=561682bc&pli=1#gid=0"
          // target="_blank"
          // rel="noopener noreferrer"
          className="availabilityOfRooms view"
        ></div>
        <div className="tickets view"></div>
      </div>
    </div>
  );
};

export default MainViewPage;

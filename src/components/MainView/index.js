import React from 'react';
import * as ROUTES  from '../../constants/routes'
import { Link } from 'react-router-dom';

const MainView = () => {
    return (
                <div className="mainView">
                    <Link to={ROUTES.WORK_PLAN}><h1 className="workPlan view">PLAN PRACY</h1> </Link>
                    <Link to={ROUTES.REGULATIONS}><h1 className="regulations view">REGULAMINY</h1></Link>
                    <Link to={ROUTES.CAST}><h1 className="cast view">skład orkiestry</h1></Link>
                    <a href="/Repertuar_sezonu.pdf" target="_blank" className="repertoire view" >REPERTUAR SEZONU</a>
                    <Link to={ROUTES.CONTACT}><h1 className="contact view">DANE KONTAKTOWE</h1></Link>
                    <span className="reg view"></span>
                    <Link to={ROUTES.NOTES}><h1 className="notes view">NUTY DO POBRANIA</h1></Link>
                    <Link to={ROUTES.REVIEWS}><h1 className="reviews view">RECENZJE</h1></Link>
                    <Link to={ROUTES.INFO}><h1 className="info view">WAŻNE INFORMACJE</h1></Link>
                    <Link to={ROUTES.CHAT}><h1 className="messenger view">CHAT</h1></Link>
                    <a href="https://docs.google.com/spreadsheets/d/1BZlbu0sxWA2ZmI5bTj6Hoa7ob4TfEf-Bc919Cz0LuGM/edit?ts=56308a45#gid=844612180" target="_blank" rel="noopener noreferrer" className="availabilityOfWardrobes view">Dostępność garderób</a>
                    <a href="https://docs.google.com/spreadsheets/d/1795vVAA3KHB0Zin4t_2UKf0EjQ7x5ZjIx6nA7m7SFEA/edit?ts=561682bc&pli=1#gid=0" target="_blank" rel="noopener noreferrer" className="availabilityOfRooms view">Dostępność sal</a>
                    <h1 className="tickets view">BILETY</h1>
                </div>
    )
}


export default MainView;


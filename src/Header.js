import React, { Component } from 'react';
import LMDA from './Images/LaMaisonDesArtistes.png';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div className="Header">
            <div className="Langues">
                    <li className="ListeLangues">CR</li>
                    <li className="ListeLangues">FR</li>
                    <li className="ListeLangues">EN</li>
                </div>
            <div className="divLMDA">
            <NavLink to="/Accueil"><img src={LMDA} alt="logo" className="LMDA"/></NavLink>
            </div>
            <div className="divLiens">
                <NavLink to="/Accueil" className="Liens">ACCUEIL</NavLink>
                <NavLink to="/Presentation" className="Liens">PRESENTATION</NavLink>
                <NavLink to="/Produits" className="Liens">PRODUITS</NavLink>
                <NavLink to="/Createurs" className="Liens">CREATEURS</NavLink>
                <NavLink to="/Contact" className="Liens">CONTACT</NavLink>
              
                
          </div>
            </div>
        
        )
    }
};

export default Header;
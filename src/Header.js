import React, { Component } from 'react';
import LMDA from './Images/LaMaisonDesArtistes.png';
import { NavLink } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<div className="Header">
				<div className="Reseaux">
					<div className="iconReseaux">
						<i className="fab fa-facebook" />
					</div>
					<div className="iconReseaux">
						<i className="fab fa-instagram" />
					</div>
					<div className="iconReseaux">
						<i className="fab fa-twitter" />
					</div>
				</div>
				<div className="divLMDA">
					<img src={LMDA} alt="logo" className="LMDA" />
				</div>
				<div className="divLiens">
					<NavLink exact to="/" className="Liens">
						ACCUEIL
					</NavLink>
					<NavLink to="/Presentation" className="Liens">
						PRESENTATION
					</NavLink>
					<NavLink to="/Ateliers" className="Liens">
						ATELIERS/PRODUITS
					</NavLink>
					<NavLink to="/Createurs" className="Liens">
						CREATEURS
					</NavLink>
					<NavLink to="/Contact" className="Liens">
						CONTACT
					</NavLink>
				</div>
			</div>
		);
	}
}

export default Header;

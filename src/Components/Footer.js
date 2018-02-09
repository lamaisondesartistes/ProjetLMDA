import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {


    render() {
        return (
            <div className="Footer">
                <footer className="contenu">
                    <div className="home"><i className="fa fa-home" aria-hidden="true">lamaisondesartistesmg@gmail.com</i></div>
                    <div className="call"><i className="fa fa-phone" aria-hidden="true"> 0590 97 90 42</i></div>
                    <div className="alignement">
                        <div className='icon social fb'><i className='fa fa-facebook'></i></div>
                        <div className='icon social tw'><i className='fa fa-twitter'></i></div>
                        <div className='icon social in'><i className='fa fa-instagram'></i></div>
                    </div>
                </footer>
                <div className="container">
                    <NavLink to="/Accueil" className="color">Accueil</NavLink>
                    <NavLink to="/Presentation" className="color">Presentation</NavLink>
                    <NavLink to="/Produits" className="color">Produits</NavLink>
                    <NavLink to="/Createurs" className="color">Createurs</NavLink>
                    <NavLink to="/Contact" className="color">Contact</NavLink>
                </div>
                <div className="container2">
                    <div>
                        <p>Made with <i className="fa fa-heart"></i> by Simplon MG </p>
                    </div>
                    <div>
                        <NavLink to="/MentionsLegales" className="color">MentionsLégales</NavLink> <i className="fa fa-arrow-right" ></i>
                    </div>

                </div>

            </div> 
        )
    }
}

export default Footer;
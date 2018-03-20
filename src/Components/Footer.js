import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
    showTop = () => {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="Footer">
                <footer className="contenu">
                    <div className="mail-footer"><i className="fas fa-home"></i>lamaisondesartistesmg@gmail.com</div>
                    <div className="tel-footer"><i className="fas fa-phone-volume"></i> 0590 97 90 42</div>
                </footer>
                <div className="social-footer">
                    <i className="fab fa-facebook icon-f"></i>
                    <i className="fab fa-twitter icon-f"></i>
                    <i className="fab fa-instagram icon-f"></i>
                </div>
                <div className="foot-contain2">
                    <div>
                        <p>Made with <i className="fa fa-heart"></i> by Simplon MG </p>
                    </div>
                    <div>
                        <NavLink to="/MentionsLegales" onClick={this.showTop} className="foot-link">Mentionslégales</NavLink> <i className="fa fa-arrow-right"></i>
                    </div>

                </div>

            </div>
        )
    }
}

export default Footer;
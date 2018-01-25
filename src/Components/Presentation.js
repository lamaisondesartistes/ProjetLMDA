import React, { Component } from 'react';
import './Presentation.css';
import Fond from '../Images/paysage.jpg'

class Presentation extends Component {
    render() {
        return (
            <div className="imgPresentation">
                <div className="textPresentation" >
                <img src={Fond} alt="paysage" width="100%" height="40%" />
                <div className="theTitre" >
                    <h1>Présentaion</h1>
                </div><br/>
                <h3>La maison</h3>
                <p>This piupuls Empires is an online, cross-platform strategy game that lets you create your own city and accompany it from the beginning of the Stone Age onward throughout the centuries. Build structures typical of the epoch. Enlarge your sphere of influence through military campaigns and skillful dealings. With a powerful army and the right tactics, you will subjugate your enemies and forge a vast empire.</p>
                <h3>Les artiste</h3>
                <p>With more than 150 million registered players, InnoGames is one of the worldwide leading developers and publishers of online games. With over 350 employees from 30 nations, we are working daily to improve our existing games and to create new ones. A high quality, long term motivation and gaming fun are very important for us in this aspect. Tribal Wars, Grepolis, The West and Elvenar belong to the best known titles, InnoGames has published so far</p>
                <h3>La maison des artiste</h3>
                <p>With more than 150 million registered players, InnoGames is one of the worldwide leading developers and publishers of online games. With over 350 employees from 30 nations, we are working daily to improve our existing games and to create new ones. A high quality, long term motivation and gaming fun are very important for us in this aspect. Tribal Wars, Grepolis, The West and Elvenar belong to the best known titles, InnoGames has published so far</p>
                </div>
            </div>
        );
    }
}

export default Presentation;
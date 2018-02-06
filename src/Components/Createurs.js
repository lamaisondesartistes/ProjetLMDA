import React, { Component } from 'react';
import img from '../Images/PP.jpg';

const creators = [
  {
    url: './images/karl.png',
    nom: 'Karl Macabre',
    descri: 'Réalise de fulgurants progrès et rend très fier l\'équipe pédagogique.',
    poste: 'BLUE SQUAD',
  }, {
    url: 'images/gogo.png',
    nom: 'Gauthier Ginier',
    descri: 'Une vrai force de proposition et un leadership incontestable.',
    poste: 'xxxxxxx',
  }, {
    url: 'images/leevan.png',
    nom: 'Leevan Cigiscar',
    descri: 'Élève très impliqué et sérieux.',
    poste: 'xxxxxxx',
  }, {
    url: 'images/jo.png',
    nom: 'Jonathan Castanet',
    descri: 'Indispensable à la promotion, fait régner la joie et la bonne humeur.',
    poste: 'xxxxxxx',
  }, {
    url: 'images/lulu.png',
    nom: 'Lucien De Santana',
    descri: 'Ramène des fruit lorsqu\'il nous fait l\'honneur de sa présence',
    poste: 'SQUAAAAAAD',
  }, {
    url: 'images/yc.png',
    nom: 'Yves-christophe',
    descri: 'This nigga pull up on ur CSS bro! For real.',
    poste: 'DESIGNER',
  }, {
    url: 'images/mm.png',
    nom: 'Marie-Marthe',
    descri: 'Une vrai force de proposition et un leadership incontestable.',
    poste: 'xxxxxxx',
  }, {
    url: 'images/shun.png',
    nom: 'Shen Chapoullie',
    descri: 'Une vrai force de proposition et un leadership incontestable.',
    poste: 'xxxxxxx',
  }, {
    url: 'images/shun.png',
    nom: 'Shen Chapoullie',
    descri: 'Une vrai force de proposition et un leadership incontestable.',
    poste: 'xxxxxxx',
  }, {
    url: 'images/shun.png',
    nom: 'Shen Chapoullie',
    descri: 'Une vrai force de proposition et un leadership incontestable.',
    poste: 'xxxxxxx',
  }, {
    url: 'images/shun.png',
    nom: 'Shen Chapoullie',
    descri: 'Une vrai force de proposition et un leadership incontestable.',
    poste: 'xxxxxxx',
  }, {
    url: 'images/shun.png',
    nom: 'Shen Chapoullie',
    descri: 'Une vrai force de proposition et un leadership incontestable.',
    poste: 'xxxxxxx',
  },];
class Createurs extends Component {
  state = {
    modalVisibility: false,
    position: 0,
    nbr: 0
  }

  showModal = (i) => {
    this.setState({
      modalVisibility: true,
      nbr: i,
    })

  }
  hideModal = () => {
    this.setState({
      modalVisibility: false
    })
  }

  render() {

    const { modalVisibility } = this.state;
    return (

      <div id="App">
        <p className="TextLoremH">
        </p>
        {
          modalVisibility ?

            <div id="modal-container" onClick={this.hideModal}>
              <div id="creatorprofile" onClick={e => {
                e.stopPropagation();
              }  // Do something
              }>
                <img className="creatorpp" src={creators[this.state.nbr].url} alt={creators[this.state.nbr].nom} />
                <div id="creatorinfo">
                  <h1>{creators[this.state.nbr].nom}</h1>
                  <h2>{creators[this.state.nbr].poste}</h2>
                  <p>"{creators[this.state.nbr].descri}"</p>
                </div>
              </div>
              <img alt="" id="croix" onClick={this.hideModal} src="https://smartbees.fr/assets/img/x-min.png" />
            </div>

            : null
        }
        <ul id="Cards-container">
          {creators.map((Card, i) => {
            return (
              <li className="Cards" onClick={() => this.showModal(i)} key={i}><img className="creatorspp" src={Card.url} alt={Card.nom} /><p>{Card.nom}</p></li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Createurs;
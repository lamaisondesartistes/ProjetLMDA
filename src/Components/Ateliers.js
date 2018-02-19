import React, { Component } from 'react';
import Footer from './Footer';
import TestImage from '../Images/contact3.jpg';
import Cards from './Cards2';
import './CardProduits2.css';

const products = [
  {
    url: './images/1.jpg',
    nom: 'Oiseaux',
    descri: 'Réalisé à partir de feuilles de cocotiers.',
    poste: 'objets déco',
  }, {
    url: 'images/2.jpg',
    nom: 'Boule',
    descri: 'Réalisé',
    poste: 'objets déco',
  }, {
    url: 'images/3.jpg',
    nom: 'Boules',
    descri: 'Élève très impliqué et sérieux.',
    poste: 'objets déco',
  }, {
    url: 'images/4.jpg',
    nom: 'Cerfs en bois',
    descri: 'Indispensable à la promotion, fait régner la joie et la bonne humeur.',
    poste: 'objets déco',
  }, {
    url: 'images/5.jpg',
    nom: 'Collier de graines',
    descri: 'Réalisé à partir de graines du \'Péyi\'.',
    poste: 'bijoux',
  }, {
    url: 'images/6.jpg',
    nom: 'Graines diverses',
    descri: 'Réalisé à partir de graines du \'Péyi\'.',
    poste: 'objets déco',
  }];
class App extends Component {
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
      <p className="TextLoremH">Marie-galante est riche de productions locales et de
        traditions ancrées dans le patrimoine. Par conséquent LA MAISON DES ARTISTES se fera un
        plaisir de contribuer à leur valorisation ainsi qu’à leur promotion, à travers toutes nos
        créations.
      </p>
      <div className="DivOfTitle">
            <p className="TextOfDivOfTitle">ATELIERS</p>
      </div>
      <Cards/>
        {
          modalVisibility ?

            <div id="modal-container" onClick={this.hideModal}>
              <div id="creatorprofile" onClick={e => {
                e.stopPropagation();
              }  // Do something
              }>
                <img className="creatorpp" src={products[this.state.nbr].url} alt={products[this.state.nbr].nom} />
                
              </div>
              <img alt="" id="croix" onClick={this.hideModal} src="https://smartbees.fr/assets/img/x-min.png" />
            </div>

            : null
        }
        <div className="ImageNature">
          <p className="TextOfDivOfTitle">PRODUITS</p>
        </div>
        <ul id="Cards-container">
          {products.map((Card, i) => {
            return (
              <li className="Cards" onClick={() => this.showModal(i)} key={i}><img className="creatorspp" src={Card.url} alt={Card.nom} /><p>{Card.nom}</p></li>
            )
          })}
        </ul>
        <Footer/>
      </div>
    );
  }
}

export default App;
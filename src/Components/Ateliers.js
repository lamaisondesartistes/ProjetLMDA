import React, { Component } from 'react';
import Footer from './Footer';
import TestImage from '../Images/contact3.jpg';
import Cards from './Cards2';
import './CardProduits2.css';

const products = [
  {
    url: './images/1.jpg',
    nom: 'Collier Coquillage',
  }, {
    url: 'images/2.jpg',
    nom: 'Collier Dent',
  }, {
    url: 'images/3.jpg',
    nom: 'Oeil de boeuf',
  }, {
    url: 'images/4.jpg',
    nom: 'Boucles d\'oreilles',
  }, {
    url: 'images/5.jpg',
    nom: 'Colliers divers',
  }, {
    url: 'images/6.jpg',
    nom: 'Boucles d\'oreilles divers',
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
      <strong><p className="TextLoremH">Marie-galante est riche de productions locales et de
        traditions ancrées dans le patrimoine. Par conséquent LA MAISON DES ARTISTES se fera un
        plaisir de contribuer à leur valorisation ainsi qu’à leur promotion, à travers toutes nos
        créations.
      </p></strong>
      <div className="DivOfTitle2">
            <p className="TextOfDivOfTitle2">ATELIERS</p>
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
        <div className="ImageNature2">
          <p className="TextOfDivOfTitle2">PRODUITS</p>
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
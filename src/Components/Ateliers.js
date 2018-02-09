import React, { Component } from 'react';
import Footer from './Footer';
import TestImage from '../Images/contact3.jpg';

const products = [
  {
    url: './images/oiseaux.jpg',
    nom: 'Oiseaux',
    descri: 'Réalisé à partir de feuilles de cocotiers.',
    poste: 'objets déco',
  }, {
    url: 'images/boule.jpg',
    nom: 'Boule',
    descri: 'Réalisé',
    poste: 'objets déco',
  }, {
    url: 'images/boule2.jpg',
    nom: 'Boules',
    descri: 'Élève très impliqué et sérieux.',
    poste: 'objets déco',
  }, {
    url: 'images/cerfs.jpg',
    nom: 'Cerfs en bois',
    descri: 'Indispensable à la promotion, fait régner la joie et la bonne humeur.',
    poste: 'objets déco',
  }, {
    url: 'images/collier.jpg',
    nom: 'Collier de graines',
    descri: 'Réalisé à partir de graines du \'Péyi\'.',
    poste: 'bijoux',
  }, {
    url: 'images/graines.jpg',
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

        {
          modalVisibility ?

            <div id="modal-container" onClick={this.hideModal}>
              <div id="creatorprofile" onClick={e => {
                e.stopPropagation();
              }  // Do something
              }>
                <img className="creatorpp" src={products[this.state.nbr].url} alt={products[this.state.nbr].nom} />
                <div id="creatorinfo">
                  <h1>{products[this.state.nbr].nom}</h1>
                  <h2>{products[this.state.nbr].poste}</h2>
                  <p>"{products[this.state.nbr].descri}"</p>
                </div>
              </div>
              <img alt="" id="croix" onClick={this.hideModal} src="https://smartbees.fr/assets/img/x-min.png" />
            </div>

            : null
        }
        <div className="ImageNature">
          <p className="TextAlignCenter">Nos Produits</p>
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
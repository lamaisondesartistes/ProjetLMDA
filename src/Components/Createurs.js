import React, { Component } from 'react';
import Footer from './Footer';
import img from '../Images/PP.jpg';

const creators = [
  {
    url: 'images/user13.png',
    nom: 'PERATOU CATUSSIA',
    descri: 'Je suis la directrice de « La Maison Des Artistes », je fixe les objectifs de l’entreprise, j’organise et coordonne le travail. J’ai de la rigueur, de l’organisation et du charisme.',
    poste: 'DIRECTRICE',
  }, {
    url: 'images/user13.png',
    nom: 'FARGEOT MARIELLE',
    descri: 'Je suis la sous directrice de « La Maison Des Artistes », j’assiste la directrice dans ses fonctions d’encadrement et gère les ateliers « formation ». J’ai de l’organisation, je suis opérationnelle et loyale.',
    poste: 'SOUS DIRECTRICE',
  }, {
    url: 'images/user13.png',
    nom: 'LADREZEAU YANN',
    descri: 'Je suis le responsable du pôle communication internet et réseaux sociaux.',
    poste: 'RESPONSABLE COMMUNICATION',
  }, {
    url: 'images/user13.png',
    nom: 'BRANDON DIMITRI',
    descri: 'Je suis l’attaché de presse de « La Maison Des Artistes », je suis chargé de la communication orale et écrite de l’entreprise avec les différentes presses. Je suis littéraire, j’ai une aisance à la communication et je suis dynamique.',
    poste: 'ATTACHE DE PRESSE',
  }, {
    url: 'images/user13.png',
    nom: 'LADREZEAU LAURY',
    descri: 'Je suis le responsable du pôle achat vente de « La Maison Des Artistes ». Je gère les achats et les ventes, je tiens à jour les documents comptables, je travaille en étroite collaboration avec les pôles production et commercialisation. Je suis intègre, organisé et j’ai un niveau en math assez correct.',
    poste: 'RESPONSABLE ACHAT-VENTE',
  }, {
    url: 'images/user13.png',
    nom: 'THOMAS MEDHY',
    descri: 'Je suis le responsable du pôle production 1 de « La Maison Des Artistes ». Je gère la production quantitativement et qualitativement, je fixe le prix des produits fabriquésJe suis créatif, minutieux et productif.',
    poste: 'RESPONSABLE PRODUCTION',
  }, {
    url: 'images/user13.png',
    nom: 'SELBONNE MARVIN',
    descri: 'Je suis le second responsable du pôle production de « La Maison Des Artistes ».  Je gère la production quantitativement et qualitativement, je fixe le prix des produits fabriqués.',
    poste: 'RESPONSABLE PRODUCTION',
  }, {
    url: 'images/user13.png',
    nom: 'CHAVEZ DA SILVA KARIM',
    descri: 'Je suis le responsable du pôle commerciale de « La Maison Des Artistes ». J’organise la distribution, gère la commercialisation et le taux de satisfaction du client.Je suis vendeur, dynamique et passionné..',
    poste: 'RESPONSABLE COMMERCIALE',
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
        <strong><p className="TextLoremH">"J’ai été initié au développement durable. Cela me plaît. De
plus, j’ai développé des talents artistiques et un esprit de créativité méconnu à
la base."
        </p></strong>
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
        <Footer/>
      </div>
    );
  }
}

export default Createurs;
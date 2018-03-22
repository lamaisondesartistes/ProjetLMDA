import React, { Component } from "react";
import Footer from "./Footer";
import TestImage from "../Images/contact3.jpg";
import Cards from "./Cards2";
import "./CardProduits2.css";
import "./Ateliers.css";
//import
import IMG1 from "../Images/LMDA1.jpg";
import IMG2 from "../Images/LMDA2.jpg";
import IMG3 from "../Images/LMDA3.png";
import IMG4 from "../Images/LMDA4.png";
import IMG5 from "../Images/LMDA5.png";

//

const listPictureAteliers = [
  {
    images: IMG1,
    title: "GAULETTE",
    describe:
      "Atelier de création, production d’objets d’ameublement et de décoration à base de gaulette* (*arbre merisier, bois d’inde, bois chandelle) : tables basses, des lampes, des objets décorations ..."
  },
  {
    images: IMG2,
    title: "ACCESSOIRISATION DE VETEMENT",
    describe:
      "Atelier d’accessoirisation. Les boubous créoles sont réalisés par notre partenaire, et accessoirisés avec des graines naturelles, des coquillages, ou autres éléments naturels."
  },
  {
    images: IMG3,
    title: "BIJOUX ET ACCESSOIRES DE MODE",
    describe:
      "Atelier de création, production de bijoux et accessoires de mode à base de graines naturelles (œil de bœuf et de bourrique, savonette, graine de job, canique...), de coquillages et coraux et autres éléments naturels (dents de cochon, bambou...)..."
  },
  {
    images: IMG4,
    title: "ACCESSOIRES ET OBJETS DECORATIFS",
    describe:
      "Atelier de création, production d’accessoires et objets décoratifs à base de calebasses, bois flotté, graines, sables et autres éléments naturels. A savoir : kwi, lampes, présentoir boucle d’oreille..."
  },
  {
    images: IMG5,
    title: "ATELIERS POUR ENFANTS",
    describe:
      "LA MAISON DES ARTISTES se veut être aussi, un pôle d’animation en réalisant des ateliers pédagogiques à l’attention des écoles maternelles et primaires qui permettront une sensibilisation des tout petits, à notre environnement de part la richesse qu’il nous procure."
  }
];

const products = [
  {
    url: "./images/1.jpg",
    nom: "Collier Coquillage"
  },
  {
    url: "images/2.jpg",
    nom: "Collier Dent"
  },
  {
    url: "images/3.jpg",
    nom: "Oeil de boeuf"
  },
  {
    url: "images/4.jpg",
    nom: "Boucles d'oreilles"
  },
  {
    url: "images/5.jpg",
    nom: "Colliers divers"
  },
  {
    url: "images/7.jpg",
    nom: "Colliers de bambou"
  },
  {
    url: "images/8.jpg",
    nom: "Boucles d'oreille avec canique"
  },
  {
    url: "images/6.jpg",
    nom: "Boucles d'oreilles divers"
  }
];
class App extends Component {
  state = {
    modalVisibility: false,
    position: 0,
    nbr: 0
  };
  // function Next and previous

  previousSlide = () => {
    const { position } = this.state;
    this.setState({
      position: position - 1
    });
    if (position <= 0)
      this.setState({
        position: listPictureAteliers.length - 1
      });
  };

  nextSlide = () => {
    this.setState({
      position: this.state.position + 1
    });
    if (this.state.position > listPictureAteliers.length - 2) {
      this.setState({
        position: 0
      });
    }
  };

  showModal = i => {
    this.setState({
      modalVisibility: true,
      nbr: i
    });
  };
  hideModal = () => {
    this.setState({
      modalVisibility: false
    });
  };

  render() {
    const { modalVisibility } = this.state;
    const newMargin = this.state.position * -275;
    const newMargins = this.state.position * -470;
    return (
      <div id="App">
        <strong>
          <p className="TextLoremH">
            Marie-galante est riche de productions locales et de traditions
            ancrées dans le patrimoine. Par conséquent LA MAISON DES ARTISTES se
            fera un plaisir de contribuer à leur valorisation ainsi qu’à leur
            promotion, à travers toutes nos créations.
          </p>
        </strong>
        <div className="DivOfTitle2">
          <p className="TextOfDivOfTitle2">ATELIERS</p>
        </div>

        {/*PARTIE SLIDER ATELIER*/}

        <div className="ateslider">
          {/*PARTIE TITLE ATELIER*/}

          <div className="boxtitle">
            <ul style={{ marginLeft: newMargin }} className="list">
              {listPictureAteliers.map((slide, i) => {
                return (
                  <li key={i}>
                    <p className="atesentences">{slide.title}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          {/*PARTIE IMAGES ATELIER*/}

          <div className="box">
            <a onClick={this.previousSlide} type="button">
              <i className="fas fa-chevron-left" />
            </a>
            <div className="slider-container">
              <ul style={{ marginLeft: newMargin }} className="list">
                {listPictureAteliers.map((el, i) => {
                  return (
                    <li key={i}>
                      <img
                        className="atepicture"
                        src={el.images}
                        alt={el.title}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
            <a onClick={this.nextSlide} type="button">
              <i className="fas fa-chevron-right" onClick={this.nextSlide} />
            </a>
          </div>

          {/*
  LA PARTIE  DESCRIPTION ATELIER

*/}

          <div className="boxsentence">
            <ul style={{ marginLeft: newMargins }} className="list">
              {listPictureAteliers.map((slide, i) => {
                return (
                  <li key={i}>
                    <p className="atesentence">{slide.describe}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/*

Partie a  ne pas toucher

*/}

        {modalVisibility ? (
          <div id="modal-container" onClick={this.hideModal}>
            <div
              id="creatorprofile"
              onClick={
                e => {
                  e.stopPropagation();
                } // Do something
              }
            >
              <img
                className="creatorpp"
                src={products[this.state.nbr].url}
                alt={products[this.state.nbr].nom}
              />
            </div>
            <img
              alt=""
              id="croix"
              onClick={this.hideModal}
              src="https://smartbees.fr/assets/img/x-min.png"
            />
          </div>
        ) : null}

        {/* liste des produits */}
        {modalVisibility ? (
          <div id="modal-container" onClick={this.hideModal}>
            <div
              id="creatorprofile"
              onClick={
                e => {
                  e.stopPropagation();
                } // Do something
              }
            >
              <img
                className="creatorpp"
                src={products[this.state.nbr].url}
                alt={products[this.state.nbr].nom}
              />
            </div>
            <img
              alt=""
              id="croix"
              onClick={this.hideModal}
              src="https://smartbees.fr/assets/img/x-min.png"
            />
          </div>
        ) : null}
        <div className="DivOfTitle2">
          <p className="TextOfDivOfTitle2">PRODUITS</p>
        </div>
        <ul id="Cards-container">
          {products.map((Card, i) => {
            return (
              <li className="Cards" onClick={() => this.showModal(i)} key={i}>
                <img className="creatorspp" src={Card.url} alt={Card.nom} />
                <p>{Card.nom}</p>
              </li>
            );
          })}
        </ul>
        <Footer />
      </div>
    );
  }
}

export default App;

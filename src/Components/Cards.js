import React, { Component } from 'react';
import CardProduit from './CardProduit';
import Produits from './DataProduit';

class Cards extends Component {
  state={
    dataProduit: Produits,
  }
  render() {
    return (
      <div>
        <h1 className="TextOfDivOfTitle">Ateliers</h1>
        <div className="div-cards">
            {this.state.dataProduit.map((card, i)=> {
              return(
                <CardProduit
                key={i} 
                src={card.src}
                nomProduit={card.nom}
                iconProduit={card.icone}
                descriProduit={card.descr}/>
              )
            })}
        </div>
      </div>
      );
  }
}

export default Cards;
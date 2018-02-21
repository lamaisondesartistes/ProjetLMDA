import React, { Component } from 'react';
import CardProduit from './CardProduits2';
import Produits from './DataProduit2';

class Cards extends Component {
  state={
    dataProduit: Produits,
  }
  render() {
    return (
      <div>
        <div className="div-cards2">
          {this.state.dataProduit.map((card, i)=> {
          return(
          <CardProduit key={i} src={card.src} nomProduit={card.nom} descriProduit={card.descr}/>
          )
          })}
          
          
        </div>
        
      </div>
      
    );
  }
}

export default Cards;
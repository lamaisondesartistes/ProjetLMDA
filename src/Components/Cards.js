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
        <h2 style={{textAlign:"center", marginTop:"40px"}}></h2>
        <div className="div-cards">
          <div className="DivOfTitle">
            <p className="TextOfDivOfTitle">ATELIERS</p>
          </div>
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

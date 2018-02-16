import React, { Component } from 'react';

class CardMini extends Component {


  render(){
    return (
      <div className="Card">
        <img className="imgProduit" src={this.props.src} alt={this.props.alt}/>
        <img className="Iconos" src={this.props.iconProduit} alt={this.props.alt}/>
        <p className="TitreDeProduit">{this.props.nomProduit}</p>
        <p className="TryProduct">{this.props.descriProduit}</p>
      </div>
    );
  }
}
export default CardMini;
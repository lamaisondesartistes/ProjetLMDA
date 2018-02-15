import React, { Component } from 'react';

class CardMini extends Component {
  state={
    visibility:'visible',
  }
  
  render(){
    const Imageuh = {
      backgroundImage:`url(${this.props.src})`,
      backgroundSize:'cover',
      
    }
    return (
      <div className="Card"  >
          <div className="div-Card-Image">
              <div className="imgProduit" style={Imageuh} >
              <p className="TitreDeProduit" style={{visibility:this.state.visibility}} >{this.props.nomProduit}</p>
              <p className="TryProduct" style={{visibility:this.state.visibility}} >{this.props.descriProduit}</p>
              </div>
          </div>
      </div>
    );
  }
}
export default CardMini;
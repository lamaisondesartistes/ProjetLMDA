import React, { Component } from 'react';

class CardMini2 extends Component {
  state={
    visibility:'visible',
  }
  
  render(){
    const Imageuh = {
      backgroundImage:`url(${this.props.src})`,
      backgroundSize:'cover',
      
    }
    return (
      <div className="Card2"  >
          <div className="div-Card-Image2">
              <div className="imgProduit2" style={Imageuh} >
              <p className="TitreDeProduit2" style={{visibility:this.state.visibility}} >{this.props.nomProduit}</p>
              <p className="TryProduct2" style={{visibility:this.state.visibility}} >{this.props.descriProduit}</p>
              </div>
          </div>
      </div>
    );
  }
}
export default CardMini2;
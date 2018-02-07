import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class CardMini extends Component {
  state={
    visibility:'hidden',
  }
  showDesc=()=>{
    this.setState({
      visibility : 'visible',
      
    })
  }
  hideDesc=()=>{
    this.setState({
      visibility:'hidden',
    })
  }
  
  render(){
    const Imageuh = {
      backgroundImage:`url(${this.props.src})`,
      backgroundSize:'cover',
      
    }
    return (
      <div className="Card"  >
          <NavLink to="/Produits"className="div-Card-Image">
              <div className="imgProduit" style={Imageuh} onMouseOver={this.showDesc} onMouseLeave={this.hideDesc}>
              <p className="TitreDeProduit" style={{visibility:this.state.visibility}} >{this.props.nomProduit}</p>
              <p className="TryProduct" style={{visibility:this.state.visibility}} >{this.props.descriProduit}</p>
              </div>
          </NavLink>
      </div>
    );
  }
}
export default CardMini;
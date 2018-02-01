import React, { Component } from 'react';


 
class CardMini extends Component {
  state={
    visibility:'hidden',
    heightImage:'240px',
    witdhImage:'320px'
  }
  showDesc=()=>{

    this.setState({
      visibility : 'visible',
      heightImage:'270px',
      witdhImage:'350px',
    })
  }
  hideDesc=()=>{
    this.setState({
      visibility:'hidden',
      heightImage:'240px',
      witdhImage:'320px'
    })
  }
  
  render(){
    const Imageuh = {
      backgroundImage:`url(${this.props.src})`,
      backgroundSize:'cover',
      height:'239px',
    }
    return (
      <div className="Card"  >
          <div className="div-Card-Image">
              <div className="imgProduit" style={Imageuh} onMouseOver={this.showDesc} onMouseLeave={this.hideDesc}>
              <p className="TitreDeProduit" style={{visibility:this.state.visibility}} >{this.props.nomProduit}</p>
              <p style={{visibility:this.state.visibility}} >{this.props.descriProduit}</p>
              </div>              
              
          </div>
      </div>
    );
  }
}

export default CardMini;

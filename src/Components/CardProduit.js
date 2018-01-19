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
      witdhImage:'350px'
      
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

    return (
      <div className="Card" onMouseOver={this.showDesc} onMouseLeave={this.hideDesc}>
          <div className="div-Card-Image" >
                <img className="imgProduit" src={this.props.src} alt={this.props.alt} style={{height:this.state.heightImage, width:this.state.witdhImage} }/>
                <div className='description-produit' style={{visibility:this.state.visibility}}>
                  <h1 className="nomProduit" >{this.props.nomProduit}</h1>
                  <p className="descriProduit" >{this.props.descriProduit}</p>
                </div>
          </div>
      </div>
    );
  }
}

export default CardMini;

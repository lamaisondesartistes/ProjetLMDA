import React, { Component } from 'react';
import './Jumbotron.css';
import lambi from '../Images/lambi.png'
import fond from '../Images/jumbo_modif.png' 


const divStyle = {
  backgroundImage: `url(${fond})`,
  backgroundSize:'cover',
  backgroundColor:'rgb(128, 118, 118)',
  backgroundBlendMode:'multiply',
  width: "100%",
  paddingTop: "12%",
  paddingBottom: "2%",

 }
class App extends Component {
  render() {
    return (
      <div className="ContainerLMDA">
    <div style={divStyle}>
        <h1 id="TitreLmda">La Maison Des Artistes</h1>
        <p id="SousTitreLmda">" Rien ne se perd, tout se transforme... "<br/>
        </p>
        <p className="Jumbo-Author">Antoine Laurent de Lavoisier</p>
    </div>
    <img src={lambi} alt="conque à lambi" className="imgLMDA"/>
    <h1>QUI SOMMES-NOUS ?</h1>
    <p> Dans le cadre du concours « Entreprendre en Lycée », le lycée H. BASTARAUD présente :
                    «  LA MAISON DES ARTISTES » création, production, vente et formation aux métiers de l’artisanat
                    d’art.</p>
    </div>
    );
  }
}

export default App;

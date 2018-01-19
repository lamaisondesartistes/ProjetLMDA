import React, { Component } from 'react';
import img from '../Images/collier2.jpg';
import './Jumbotron.css';

const divStyle = {
  backgroundImage: `url(${img})`,
  backgroundSize:'cover',
  width: "100%",
  paddingTop: "5%",
  paddingBottom: "2%",
 }

class App extends Component {
  render() {
    return (
      <div style={divStyle}>
          <h1 id="TitreLmda">La Maison Des Artistes</h1>
          <p id="SousTitreLmda">Rien ne se perd, tout se transforme...</p>
      </div>
    );
  }
}

export default App;
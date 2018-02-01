import React, { Component } from 'react';
import img from '../Images/collier2.jpg';
import './Jumbotron.css';
import lambi from '../Images/lambi.png'

const divStyle = {
  backgroundImage: `url(${img})`,
  backgroundSize:'cover',
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
        <p id="SousTitreLmda">Rien ne se perd, tout se transforme...</p>
    </div>
    <img src={lambi} alt="" className="imgLMDA"/>
    <h1>QUI SOMMES-NOUS ?</h1>
    <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des pa</p>
    </div>
    );
  }
}

export default App;

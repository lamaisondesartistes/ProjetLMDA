import React, { Component } from 'react';
import './Mentionslegal.css';
import Footer from './Footer'


class App extends Component {

  render() {
    return (
      <div className="Legal-Notice">
      <div className="Container-Info">
      <h1 className="Title-lign">Mentions Légales</h1>
    <div className="Block-Info">
    <h3 className="Container-LégalNotice">La Maison Des Artistes</h3>     
   <p className="Info-Business">Le site lamaisondesartistes.com est édité par :</p>
   <p className="Info-Business"><b>Simplon Marie-Galante</b></p>
   <p className="Info-Business">Section Tivoli 97112 Grand-Bourg</p>
   <p className="Info-Business">La Maison des Artistes est une Entreprise qui conçoit des objets artisanaux.</p>
   <p className="Info-Business"><b>Adresse de l'établissement :</b> Rue de la Savane 97112 Grand-Bourg</p>
   <p className="Info-Business"><b>Téléphone:</b> 0590979042.</p>
   <p className="Info-Business"><b>Email:</b> lamaisondesartistes@gmail.com</p>
   <p className="Info-Business"><b>Le Directeur de cette publication est </b></p><p>Simplon MG. </p>
     
   <hr size="1" align="left" width="60%" color="black" ></hr>
  
  <h3 className="Container-LégalNotice">Hébergement</h3>
  
    <p className="Info-Business">Le site lamaisondesartistes.com est hébergé par : </p>
    <p className="Info-Business">Github</p>
   </div>
   </div>
        <Footer/>
   </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import LMDA from '../Images/404.png';
import './Notfound.css';

class NOTFOUND extends Component {
state={

}
  render() {
    return (
      <div className="page-error-container">
        <div className="page-error-container2" >
          <div className="dinheader">
          <img className="dinheaders" src={LMDA} alt="logo" height="178px" width="414px"/>
          </div>
          <div className="dinheador dinheaderset">
          <p className="oups" ><strong>Oupss!</strong></p>
          <p>La page que vous recherchez n’existe pas ou plus :</p>          
          <p>Utiliser le menu ci-dessus ou retourner à la page d’accueil pour tenter de trouver l’article que vous chercher.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default NOTFOUND;
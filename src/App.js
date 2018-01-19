import React, { Component } from 'react';
import {Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Accueil  from './Components/Accueil';
import Createurs from './Components/Createurs';
import Presentation from './Components/Presentation';
import Produits from './Components/Produits';
import Contact from './Components/Contact';
import NotFound from './Components/Notfound';

class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <Route exact path="/" component={Accueil} />
          <Route path="/Createurs" component={Createurs} />
          <Route path="/Presentation" component={Presentation}/>
          <Route path="/Produits" component={Produits} />
          <Route path="/Contact" component={Contact} />
          <Route path="*" component={NotFound} />
        </div>
    );
  }
}

export default App;

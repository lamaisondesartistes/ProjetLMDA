import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Accueil  from './Components/Accueil';
import Createurs from './Components/Createurs';
import Presentation from './Components/Presentation';
import Produits from './Components/Produits';
import Contact from './Components/Contact';

class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <Route exact path="/Accueil" component={Accueil} />
          <Route path="/Createurs" component={Createurs} />
          <Route path="/Presentation" component={Presentation}/>
          <Route path="/Produits" component={Produits} />
          <Route path="/Contact" component={Contact} />
        </div>
    );
  }
}

export default App;

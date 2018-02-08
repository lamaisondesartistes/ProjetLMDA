import React, { Component } from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Accueil  from './Components/Accueil';
import Createurs from './Components/Createurs';
import Presentation from './Components/Presentation';
import Produits from './Components/Produits';
import Contact from './Components/Contact';
import NotFound from './Components/Notfound';
import MentionsLégales from './Components/Mentionslegal';
import Mentionslegal from './Components/Mentionslegal';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
       <Header/>
       <Switch>
          <Route exact path="/" component={Accueil} />
          <Route exact path="/Accueil" component={Accueil} />
          <Route exact path="/Createurs" component={Createurs} />
          <Route exact path="/Presentation" component={Presentation}/>
          <Route exact path="/Produits" component={Produits} />
          <Route exact path="/Contact" component={Contact} />
          <Route path="/Mentionslegales" component={Mentionslegal}/>
          <Route component={NotFound} />
          
          </Switch>
         </div>
        </BrowserRouter>
    );
  }
}

export default App;

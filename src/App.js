import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Accueil from './Components/Accueil';
import Createurs from './Components/Createurs';
import Presentation from './Components/Presentation';
import Ateliers from './Components/Ateliers';
import Contact from './Components/Contact';
import NotFound from './Components/Notfound';
import Mentionslegal from './Components/Mentionslegal';

class App extends Component {
	render() {
		return (
			<HashRouter>
				<div>
					<Header />
					<Switch>
						<Route exact path="/" component={Accueil} />
						<Route path="/Createurs" component={Createurs} />
						<Route path="/Presentation" component={Presentation} />
						<Route path="/Ateliers" component={Ateliers} />
						<Route path="/Contact" component={Contact} />
						<Route path="/Mentionslegales" component={Mentionslegal} />
						<Route path="*" component={NotFound} />
					</Switch>
				</div>
			</HashRouter>
		);
	}
}

export default App;

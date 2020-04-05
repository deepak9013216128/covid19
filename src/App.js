import React from 'react';
import {Route,Switch} from 'react-router-dom';

import './App.css';

import Country from './pages/country/country.component';
import Contact from './pages/contact/contact.component';
import HomePage from './pages/homepage/homepage.component';

const API_URL = 'https://api.covid19api.com/';

class App extends React.Component {
	state = {
		summary: {}
	}
	
	componentDidMount = async () => {
		fetch(API_URL)
		.then(response => response.json())
		.then(allUrl => `${allUrl.summaryRoute.Path}`.slice(1))
		.then(summaryUrl => fetch(`${API_URL}${summaryUrl}`))
		.then(response => response.json())
		.then(summary => this.setState({summary: summary}))
		.catch(error =>console.log(error))
	}
	render(){
		// console.log(this.state.summary)
		return (
			<div className="App">
				<Switch>
					<Route exact path='/' render={()=> <HomePage {...this.state.summary} /> } />
					<Route exact path='/country' render={()=> <Country {...this.state.summary}/> } />
					<Route exact path='/Contact' render={()=> <Contact /> } />
				</Switch>
			</div>
		);
	}
}

export default App;

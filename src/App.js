import React from 'react';
import {Route,Switch} from 'react-router-dom';

import './App.css';

import Country from './pages/country/country.component';
import Contact from './pages/contact/contact.component';
import HomePage from './pages/homepage/homepage.component';
import SingleCountryPage from './pages/single-country-page/single-country-page.component';

// const API_URL = 'https://api.covid19api.com/';
const API_URL = 'https://corona.lmao.ninja/all';
const API_URL2 = 'https://corona.lmao.ninja/countries?sort=country';

class App extends React.Component {
	state = {
		covid19: {},
		countries:{}
	}
	
	componentDidMount = async () => {
		// fetch(API_URL)
		// 	.then(response => response.json())
		// 	.then(allUrl => `${allUrl.summaryRoute.Path}`.slice(1))
		// 	.then(summaryUrl => fetch(`${API_URL}${summaryUrl}`))
		// 	.then(response => response.json())
		// 	.then(summary => this.setState({summary: summary}))
		// 	.catch(error =>console.log(error))
		fetch(API_URL)
			.then(response => response.json())
			.then(covid19 => this.setState({covid19: covid19}))
			.catch(error =>console.log(error))
		fetch(API_URL2)
			.then(response => response.json())
			.then(countries => this.setState({countries: countries}))
			.catch(error =>console.log(error))
	}
	render(){
		const {covid19,countries} = this.state;
		return (
			<div className="App">
				<Switch>
					<Route exact path='/' render={()=> <HomePage covid19={covid19} /> } />
					<Route exact path='/country' render={()=> <Country countries={countries}/> } />
					<Route 
						exact 
						path='/country/:countryName' 
						render={(routeProps)=> <SingleCountryPage {...routeProps}/>} 
					/>
					<Route exact path='/Contact' render={()=> <Contact /> } />
				</Switch>
			</div>
		);
	}
}

export default App;

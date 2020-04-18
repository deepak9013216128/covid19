import React from 'react';
import {Route,Switch} from 'react-router-dom';

import './App.css';

import Navbar from './component/navbar/navbar.component';
import Footer from './component/footer/footer.component';

import Country from './pages/country/country.component';
import Contact from './pages/contact/contact.component';
import HomePage from './pages/homepage/homepage.component';
import SingleCountryPage from './pages/single-country-page/single-country-page.component';

// const API_URL = 'https://api.covid19api.com/';
// https://corona.lmao.ninja/v2/historical/india TIMELINE COUNTRY
// https://protected-reaches-03598.herokuapp.com/citydata.json INDIA-STATE-CITY
// https://protected-reaches-03598.herokuapp.com/historicaldata.json TIMELINE-INDIA

const API_URL = 'https://corona.lmao.ninja/v2/all';
const API_URL2 = 'https://corona.lmao.ninja/v2/countries?sort=country';

class App extends React.Component {
	state = {
		covid19: {},
		countries:{}
	}
	
	componentDidMount = async () => {
		Promise.all([
				fetch(API_URL),
				fetch(API_URL2)
			])
			.then( ([responseCovid19,responseCountries]) =>
				Promise.all([
					responseCovid19.json(),responseCountries.json()
				]))
			.then(([covid19,countries]) => this.setState({covid19,countries}) )
	}
	render(){
		const {covid19,countries} = this.state;
		return (
			<div className="App">
				<Navbar />
				<div className='app-container' >
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
				<Footer />
			</div>
		);
	}
}

export default App;

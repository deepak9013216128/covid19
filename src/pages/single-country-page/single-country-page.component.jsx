import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './single-country-page.styles.css';

import Card from '../../component/card/card.component';
// import LineChart from '../../component/line-chart/line-chart.component';


const API_URL_COUNTRY = 'https://corona.lmao.ninja/countries/';
// const API_URL_COUNTRY_TIMELINE = 'https://api.thevirustracker.com/free-api?countryTimeline';

class SingleCountryPage extends React.Component {
	state = {
		countryName: '',
		country:{},
		timeline:{},
		properties: [
			['cases','primary'],
			['recovered','success'],
			['deaths','danger'],
			['todayCases','primary'],
			['todayDeaths','danger'],
			['active','warning'],
			['casesPerOneMillion','warning'],
			['deathsPerOneMillion','danger'],
			['testsPerOneMillion','success'],
			['critical','warning'],
			['tests','primary']
		]
	}
	fetchData = (url,countryName) => {
		fetch(url)
			.then(response => response.json())
			.then(country => {
				this.setState({country,countryName})
				// const url = `${API_URL_COUNTRY_TIMELINE}=${country.countryInfo.iso2}/`;
				// return fetch(url)
			})
			// .then(response => response.json())
			// .then(timeline => this.setState({timeline: timeline.timelineitems[0]}))
			.catch(error => console.log(error))
	}
	componentDidMount(){
		const {countryName} = this.props.match.params;
		console.log('componentDidMount')
		let url = `${API_URL_COUNTRY}${countryName}`;
		this.fetchData(url);
	}
	componentDidUpdate(){
		const {countryName} = this.props.match.params;
		let url = `${API_URL_COUNTRY}${countryName}`;
		if(this.state.countryName !== countryName){
			this.fetchData(url,countryName)
		}
	}
	render(){
		const {country,properties,timeline} = this.state;
		return (
			<div>
				<div className="jumbotron">
					<h1 className="display-4">{country.country}</h1>
					<h4> The latest {country.country} coronavirus statistical charts and information.</h4>
					<img src={country.countryInfo && country.countryInfo.flag} alt={country.country} />
				</div>
				<div className='single-page-container'>
				{
					properties.map((property,i) =>
						<Card 
							key={uuidv4()} 
							property={property[0]} 
							color={property[1]} 
							idx={i}
							value={country[property[0]]} 
						/>
						)
				}
				</div>
			</div>
		)
	}
};

export default SingleCountryPage;
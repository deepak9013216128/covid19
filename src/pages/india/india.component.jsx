import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// import './single-country-page.styles.css';
import StateTable from '../../component/state-table/state-table.component';
import Card from '../../component/card/card.component';
import LineChart from '../../component/line-chart/line-chart.component';
import BarChart from '../../component/bar-chart/bar-chart.component';

const API_URL_COUNTRY = 'https://corona.lmao.ninja/v2/countries/';
const API_URL_COUNTRY_TIMELINE = 'https://corona.lmao.ninja/v2/historical/';
const API_URL_INDIA_STATE = 'https://api.rootnet.in/covid19-in/stats/latest';

class India extends React.Component {
	state = {
		countryName: '',
		country:{},
		historicalData:{},
		stats: null,
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
	fetchData = (countryName) => {
		Promise.all([
			fetch(`${API_URL_COUNTRY}${countryName}`),
			fetch(`${API_URL_COUNTRY_TIMELINE}${countryName}/`),
			fetch(API_URL_INDIA_STATE)
			
		])
		.then(([response1, response2,response3]) => (
			Promise.all([response1.json(), response2.json(),response3.json()])
		)) 
		.then(([country,historicalData,stats]) => (
			this.setState({country,historicalData,countryName,stats})
		))
		// fetch(`${API_URL_COUNTRY}${countryName}`)
		// 	.then(response => response.json())
		// 	.then(country => {
		// 		this.setState({country,countryName})
		// 		return fetch(`${API_URL_COUNTRY_TIMELINE}${countryName}/`)
		// 	})
		// 	.then(response => response.json())
		// 	.then(historicalData => this.setState({historicalData}))
		.catch(error => console.log(error))
	}
	componentDidMount(){
		// const {countryName} = this.props.match.params;
		// console.log('componentDidMount',countryName)
		// let url = `${API_URL_COUNTRY}${countryName}`;
		this.fetchData('india');
	}
	componentDidUpdate(){
		// const {countryName} = this.props.match.params;
		// console.log('componentDidUpdate',countryName)
		if(this.state.countryName !== 'india'){
			this.fetchData('india')
		}
	}
	render(){
		const {country,properties,historicalData,stats} = this.state;
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
				<LineChart historicalData={historicalData}/>
				<BarChart historicalData={historicalData} />
				{stats && <StateTable {...stats.data} />}
			</div>
		)
	}
};

export default India;
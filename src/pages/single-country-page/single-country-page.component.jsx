import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './single-country-page.styles.css';

import Navbar from '../../component/navbar/navbar.component';
import Card from '../../component/card/card.component';


const API_URL = 'https://corona.lmao.ninja/countries/';

class SingleCountryPage extends React.Component {
	state = {
		data:{},
		properties: [
			'cases',
			'recovered',
			'deaths',
			'todayCases',
			'todayDeaths',
			'active',
			'critical',
			'tests',
			'casesPerOneMillion',
			'deathsPerOneMillion',
			'testsPerOneMillion'
		]
	}
	componentDidMount(){
		console.log('componentDidMount')
		const url = `${API_URL}${this.props.match.params.countryName}`;
		fetch(url)
			.then(response => response.json())
			.then(data => this.setState({data}))
		
	}
	render(){
		const {data,properties} = this.state;
		console.log(data)
		return (
			<div>
				<Navbar />
				<div className="jumbotron">
					<h1 className="display-4">{data.country}</h1>
					<img src={data.countryInfo && data.countryInfo.flag} alt={data.country} />
				</div>
				<div className='single-page-container'>
				{
					properties.map(property =>
						<Card key={uuidv4()} property={property} value={data[property]} />)
				}
				</div>
			</div>
		)
	}
};

export default SingleCountryPage;
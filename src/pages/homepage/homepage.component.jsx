import React from 'react';

import './homepage.styles.css'

import corona from '../../seedText';

import Navbar from '../../component/navbar/navbar.component';
import Footer from '../../component/footer/footer.component';

const API_URL = 'https://api.covid19api.com/';

class HomePage extends React.Component {
	state = {
		data: []
	}
	componentDidMount = async () => {
		// const response = await fetch(API_URL);
		// const covid19 = await response.json();
		
		// const summery = `${covid19[covid19.length - 1].Path}`.slice(1);
		// console.log(covid19,`${API_URL}${covid19[covid19.length - 1].Path.slice(1)}`)
		// this.setState({data: covid19})
		// fetch(`${API_URL}${covid19[covid19.length - 1].Path.slice(1)}`)
		// 	.then(response=> response.json())
		// 	.then(data => console.log(data))
		// 	.catch(error =>console.log(error))
			
	}
	render(){
		const allRoute = this.state.data.map(route =>(
			<div>
				<h1>Name: {route.Name}</h1>
				<p><strong>{route.Path}</strong></p>
				<p>Description: {route.Description}</p>
			</div>
			)
		)
		return (
			<div className='homepage'>
				<Navbar />
				<div className='homepage-container'>
					<h1>{corona.spreads}</h1>
					<div className='corona'>
						<h3>{corona.title}</h3>
					</div>
				</div>
				<div className='symptoms'>
					<h2>Symptoms</h2>
					<h3>{corona.symptoms.title}</h3>
					<p>People may experience:</p>
					<ul>
						{corona.symptoms.options.map(option => <li>{option}</li>)}
					</ul>
				</div>
				<div className='preventions'>
					<h2>Preventions</h2>
					<h3>{corona.preventions.title}</h3>
					<h4>Do</h4>
					<ul>{corona.preventions.do.map(li => <li>{li}</li>)}</ul>
					<h4>Don't</h4>
					<ul>{corona.preventions.donot.map(dont => <li>{dont}</li>)}</ul>		
				</div>
				<div className='treatment'>
					<h2>Treatment</h2>
					<h3>{corona.treatment.title}</h3>
					<p>{corona.treatment.selfCare.title}</p>
					<ul>{corona.treatment.selfCare.options.map(option => <li>{option}</li>)}</ul>
					<div className='medical-treatment'>
						<h3>{corona.treatment.medicalTreatment}</h3>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default HomePage;
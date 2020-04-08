import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './homepage.styles.css'

import corona from '../../seedText';

import Card from '../../component/card/card.component';

class HomePage extends React.Component {
	
	render(){
		const {covid19} = this.props;
		return (
			<div className='homepage'>
				<div className='homepage-container'>
					
					<div className="jumbotron">
						<h1 className='display-5'>Stay Safe  at Home</h1>
						<h3 >{corona.spreads}</h3>
						<hr className="my-4" />
						<h4 className="lead">{corona.title}</h4>
					</div>
					<div className='current-data'>
						<Card 
							key={uuidv4()} 
							property='Total Confirmed Case' 
							color='primary' 
							idx={0}
							value={covid19.cases} 
						/>
						<Card 
							key={uuidv4()} 
							property='Total Deaths' 
							color='danger' 
							idx={1}
							value={covid19.deaths} 
						/>
						<Card 
							key={uuidv4()} 
							property='Total Recovered' 
							color='success' 
							idx={2}
							value={covid19.recovered} 
						/>
						<Card 
							key={uuidv4()} 
							property='Today Cases' 
							color='primary' 
							idx={3}
							value={covid19.todayCases} 
						/>
						<Card 
							key={uuidv4()} 
							property='Today Deaths' 
							color='danger' 
							idx={4}
							value={covid19.todayDeaths} 
						/>
						<Card 
							key={uuidv4()} 
							property='Deaths Per One Million' 
							color='danger' 
							idx={5}
							value={covid19.deathsPerOneMillion} 
						/>
						<Card 
							key={uuidv4()} 
							property='Cases Per One Million' 
							color='warning' 
							idx={6}
							value={covid19.casesPerOneMillion} 
						/>
						<Card 
							key={uuidv4()} 
							property='Affected Countries' 
							color='warning' 
							idx={7}
							value={covid19.affectedCountries} 
						/>
					</div>
				</div>
				<div className='homepage-body'>
					<div className="card content" >
						<img src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" className="card-img-top" alt="..." />
						<div className="card-body">
							<h3 className="card-title">Symptoms</h3>
							<h5>{corona.symptoms.title}</h5>
							<p className="card-text">People may experience:</p>
							<ul>
								{corona.symptoms.options.map(option => <li key={uuidv4()} >{option}</li>)}
							</ul>
						</div>
					</div>
					<div className="card content" >
						<img src="https://images.unsplash.com/photo-1583947215259-38e31be8751f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" className="card-img-top" alt="..." />
						<div className="card-body">
							<h3 className="card-title">Preventions</h3>
							<h5>{corona.preventions.title}</h5>
							<p>Do</p>
							<ul>{corona.preventions.do.map(li => <li key={uuidv4()}>{li}</li>)}</ul>
							<p>Don't</p>
							<ul>{corona.preventions.donot.map(dont => <li key={uuidv4()}>{dont}</li>)}</ul>
						</div>
					</div>
					<div className="card content" >
						<img src="https://images.unsplash.com/photo-1584467735871-8e85353a8413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" className="card-img-top" alt="..." />
						<div className="card-body">
							<h3 className="card-title">Treatment</h3>
							<h5>{corona.treatment.title}</h5>
							<p>{corona.treatment.selfCare.title}</p>
							<ul>{corona.treatment.selfCare.options.map(option => <li key={uuidv4()}>{option}</li>)}</ul>
							<div className='#ffcc80 orange lighten-5'>
								<h3>{corona.treatment.medicalTreatment}</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default HomePage;
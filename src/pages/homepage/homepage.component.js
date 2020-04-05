import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './homepage.styles.css'

import corona from '../../seedText';

import Navbar from '../../component/navbar/navbar.component';
import Footer from '../../component/footer/footer.component';

class HomePage extends React.Component {
	
	render(){
		const {Global} = this.props;
		return (
			<div className='homepage'>
				<Navbar />
				<div className='homepage-container'>
					
					<div class="jumbotron">
						<h1 className='display-5'>Stay Safe  at Home</h1>
						<h3 >{corona.spreads}</h3>
						<hr class="my-4" />
						<h4 class="lead">{corona.title}</h4>
					</div>
					<div className='current-data'>
						<div class='card'>
							{
								Global && (
									<div class="card-body">
										<h5 class="card-title">Total Confirmed</h5>
										<p class="card-text">{Global.TotalConfirmed}</p>
									</div>
								)
							}
						</div>
						<div class='card'>
							{
								Global && (
									<div class="card-body">
										<h5 class="card-title">Total Deaths</h5>
										<p class="card-text">{Global.TotalDeaths}</p>
									</div>
								)
							}
						</div>
						<div class='card'>
							{
								Global && (
									<div class="card-body">
										<h5 class="card-title">Total Recovered</h5>
										<p class="card-text">{Global.TotalRecovered}</p>
									</div>
								)
							}
						</div>
						<div class='card'>
							{
								Global && (
									<div class="card-body">
										<h5 class="card-title">New Confirmed</h5>
										<p class="card-text">{Global.NewConfirmed}</p>
									</div>
								)
							}
						</div>
						<div class='card'>
							{
								Global && (
									<div class="card-body">
										<h5 class="card-title">New Deaths</h5>
										<p class="card-text">{Global.NewDeaths}</p>
									</div>
								)
							}
						</div>
						<div class='card'>
							{
								Global && (
									<div class="card-body">
										<h5 class="card-title">New Recovered</h5>
										<p class="card-text">{Global.NewRecovered}</p>
									</div>
								)
							}
						</div>
					</div>
				</div>
				<div className='homepage-body'>
					<div class="card" >
						<img src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" class="card-img-top" alt="..." />
						<div class="card-body">
							<h3 class="card-title">Symptoms</h3>
							<h5>{corona.symptoms.title}</h5>
							<p class="card-text">People may experience:</p>
							<ul>
								{corona.symptoms.options.map(option => <li key={uuidv4()} >{option}</li>)}
							</ul>
						</div>
					</div>
					<div class="card" >
						<img src="https://images.unsplash.com/photo-1583947215259-38e31be8751f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" class="card-img-top" alt="..." />
						<div class="card-body">
							<h3 class="card-title">Preventions</h3>
							<h5>{corona.preventions.title}</h5>
							<p>Do</p>
							<ul>{corona.preventions.do.map(li => <li key={uuidv4()}>{li}</li>)}</ul>
							<p>Don't</p>
							<ul>{corona.preventions.donot.map(dont => <li key={uuidv4()}>{dont}</li>)}</ul>
						</div>
					</div>
					<div class="card" >
						<img src="https://images.unsplash.com/photo-1584467735871-8e85353a8413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" class="card-img-top" alt="..." />
						<div class="card-body">
							<h3 class="card-title">Treatment</h3>
							<h5>{corona.treatment.title}</h5>
							<p>{corona.treatment.selfCare.title}</p>
							<ul>{corona.treatment.selfCare.options.map(option => <li key={uuidv4()}>{option}</li>)}</ul>
							<div className='medical-treatment'>
								<h3>{corona.treatment.medicalTreatment}</h3>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default HomePage;
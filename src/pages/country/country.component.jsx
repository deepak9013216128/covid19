import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './country.styles.css';

import Navbar from '../../component/navbar/navbar.component';
import Footer from '../../component/footer/footer.component';

class Country extends React.Component {
	state ={
		currentPage: 1,
		compareIndex: 2,
		tableHeading: [
			'country',
			'cases',
			'deaths',
			'recovered',
			'todayCases',
			'todayDeaths',
			'deathsPerOneMillion'
		]
	}
	handleCurrentPage = (event) => {
		const {currentPage} = this.state;
		if(currentPage+event.target.value > 0 && currentPage+event.target.value <22){
			this.setState({currentPage: currentPage+event.target.value})
		}
	}
	compare = (a,b) => {
		const {compareIndex,tableHeading} = this.state;
		return b[tableHeading[compareIndex]] - a[tableHeading[compareIndex]] ;
	}
	handleCompareIndex = (idx) => {
		this.setState({compareIndex: idx})
	}
	handleCounrty = (country) => {
		console.log(country)
	}
		
	render(){
		const {currentPage,tableHeading} = this.state;
		const {countries} = this.props;
		let tableBody;
		if( countries.length>0){
			countries.sort(this.compare);
			tableBody = countries
				.filter((country,idx)=> idx <12*currentPage && idx>=12*(currentPage-1) )
				.map((country,idx) => (
				<tr 
					key={uuidv4()} 
					className={`${idx%2 ? 'table-dark' : 'table-light'}`}
					onClick={() => this.handleCounrty(country)}
				>
					<th scope="col">{(idx+1)+ 12*(currentPage-1)}</th>
					{
						tableHeading.map((title,idx) => 
							<td key={uuidv4()} >{country[title]}</td>
						)
					}
				</tr>
			))
		}

		return (
			<div className='country'>
				<Navbar />
				<h1>Country Page</h1>
				<div className='table-content'>
					<table className="table">
						<thead>
							<tr className="table-info">
								<th scope="col">S No.</th>
								{
									tableHeading.map((title,idx) => 
										<th key={idx}onClick={() => this.handleCompareIndex(idx)} scope='col'>
											<span className='table-heading'>{`${title[0].toUpperCase()}${title.slice(1)}`}</span>
										</th>
									)
								}
							</tr>
						</thead>
						<tbody>
							{tableBody}
						</tbody>
					</table>
				</div>
				<div className='page'>
					<nav aria-label="Page navigation example">
						<ul className="pagination">
							<li 
								className="page-item page-link page-active" 
								onClick={this.handleCurrentPage} 
								value='-1'
							>&laquo;</li>
							<li 
								className="page-item page-link bg-secondary border-secondary" 
								onClick={this.handleCurrentPage} 
								value='0'
							>{currentPage}</li>
							<li 
								className="page-item page-link" 
								onClick={this.handleCurrentPage} 
								value='1'
							>{currentPage+1}</li>
							<li 
								className="page-item page-link" 
								onClick={this.handleCurrentPage} 
								value='2'
							>{currentPage+2}</li>
							<li 
								className="page-item page-link" 
								onClick={this.handleCurrentPage} 
								value='3'
							>&raquo;</li>
						</ul>
					</nav>
				</div>
				<Footer />
			</div>
		)
	}
};

export default Country;
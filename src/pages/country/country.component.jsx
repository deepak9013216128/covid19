import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {withRouter} from 'react-router-dom';

import './country.styles.css';

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
		const {countries} = this.props;
		const {value} = event.target;
		if(currentPage+value > 0 && currentPage+value <= Math.floor(countries.length/12)+1){
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
	handleCounrty = (country,idx) => {
		this.props.history.push(`/country/${country.country}`)
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
					
				>
					<th scope="col">{(idx+1)+ 12*(currentPage-1)}</th>
					{
						tableHeading.map((title,index) => 
							<td className={`${country[title]?title:''}`} key={uuidv4()} >
								{
									!index && (
									<span>
										<img 
											src={country.countryInfo.flag} 
											alt={country.country} 
											style={{width: '30px'}} 
										/></span>
								)}
								<span 
									className={`${!index && 'cell'}`} 
									onClick={() => !index && this.handleCounrty(country,idx)}>  {country[title]}</span>
							</td>
						)
					}
				</tr>
			))
		}

		return (
			<div className='country'>
				<div className='table-content'>
					<table className="table">
						<thead>
							<tr className="table-info">
								<th scope="col">S No.</th>
								{
									tableHeading.map((title,idx) => 
										<th 
											className='cell-column' 
											key={idx} 
											onClick={() => this.handleCompareIndex(idx)} 
											scope='col'
										>
											<span >
												{`${title[0].toUpperCase()}${title.slice(1)}`}
											</span>
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
			</div>
		)
	}
};

export default withRouter(Country);
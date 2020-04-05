import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Navbar from '../../component/navbar/navbar.component';
import Footer from '../../component/footer/footer.component';

class Country extends React.Component {
	render(){
		
		const {Countries} = this.props;
	  const tableHeading = [
			'Country',
			'TotalConfirmed',
			'TotalDeaths',
			'TotalRecovered',
			'NewDeaths',
			'NewRecovered',
			'NewConfirmed'
		];
		let tableBody;
		if( Countries){
			Countries.sort((a, b) => b.TotalDeaths - a.TotalDeaths );
			tableBody = Countries.filter((country,idx)=> idx <12).map((country,idx) => (
				<tr key={uuidv4()} className={`${idx%2 ? 'table-dark' : 'table-light'}`} >
					{tableHeading.map(title => <td key={uuidv4()}>{country[title]}</td>)}
				</tr>
			))
		}

		return (
			<div>
				<Navbar />
				<h1>Country Page</h1>
				<table className="table">
					<thead>
						<tr className="table-info">
							{
								tableHeading.map((title,idx) => <th key={idx} scope='col'>{title}</th>)
							}
						</tr>
					</thead>
					<tbody>
						{tableBody}
					</tbody>
				</table>
				<nav aria-label="Page navigation example">
					<ul class="pagination">
						<li class="page-item">
							<a class="page-link" href="#" aria-label="Previous">
								<span aria-hidden="true">&laquo;</span>
							</a>
						</li>
						<li class="page-item"><a class="page-link" href="#">1</a></li>
						<li class="page-item"><a class="page-link" href="#">2</a></li>
						<li class="page-item"><a class="page-link" href="#">3</a></li>
						<li class="page-item">
							<a class="page-link" href="#" aria-label="Next">
								<span aria-hidden="true">&raquo;</span>
							</a>
						</li>
					</ul>
				</nav>
				<Footer />
			</div>
		)
	}
};

export default Country;
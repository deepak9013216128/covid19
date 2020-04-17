import React from 'react';
import {Link} from 'react-router-dom';

import './navbar.styles.css';

const Navbar = (props) => {
	
	return (
		<nav className="navbar fixed-top navbar-expand-sm navbar-dark default-color">
			<Link className="navbar-brand active" to='/'>Home</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<span className="nav-item">
						<Link to='/country' className='nav-link text-white'>World</Link>
					</span>
					<span className="nav-item">
						<Link to='/country/india' className='nav-link text-white'>India</Link>
					</span>
					
				</ul>
				<a href='https://github.com/deepak9013216128/covid19' className='text-white'>gitHub
					<i className="fab fa-github fa-lg white-text fa-2x"> </i>
				</a>
			</div>
		</nav>
	);
};
export default Navbar;
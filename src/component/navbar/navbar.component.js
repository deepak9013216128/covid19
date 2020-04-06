import React from 'react';
import {Link} from 'react-router-dom';

import './navbar.styles.css';

const Navbar = (props) => {
	
	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-success">
			<Link className="navbar-brand" to='/'>Navbar</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link to='/' className='nav-link text-white'>Home</Link>
					</li>
					<li className="nav-item">
						<Link to='/country' className='nav-link text-white-50'>World</Link>
					</li>
					<li className="nav-item">
						<Link to='/country/india' className='nav-link text-white-50'>India</Link>
					</li>
					<li className="nav-item">
						<Link to='/contact' className='nav-link text-white-50'>Contact</Link>
					</li>
				</ul>
				<Link to='/' className='text-white-50'>gitHub</Link>
			</div>
		</nav>
	);
};
export default Navbar;
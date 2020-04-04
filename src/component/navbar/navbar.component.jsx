import React from 'react';

import './navbar.styles.css';

const Navbar = (props) => {
	
	return (
		
		<nav className='navbar'>
			<div className='nav-container'>
				<div className='nav-title'>
					<a href='#' className='nav-link'>Home</a>
				</div>
				<div className='nav-items'>
					<div className='nav-item'>
						<a href='#' className='nav-link'>India</a>
					</div>
					<div className='nav-item'>
						<a href='#' className='nav-link'>World</a>
					</div>
					<div className='nav-item'>
						<a href='#' className='nav-link'>Contact</a>
					</div>
				</div>
				<div className='nav-git'>
					<a href='#' className='nav-link'>GitHub</a>
				</div>
			</div>
		</nav>
	)
}
export default Navbar;
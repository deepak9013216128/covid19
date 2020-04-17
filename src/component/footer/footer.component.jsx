import React from 'react';

import './footer.styles.css';

const Footer = (props) => {
	
	return (
		<div className='footer'>
			<footer className="page-footer font-small cyan darken-3">
				<div className="container">
					<div className="row">
						<div className="col-md-12 py-5">
							<div className="mb-5 flex-center">
								<a className="fb-ic" href='https://www.facebook.com/profile.php?id=100012390211157'>
									<i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
								</a>
								<a className="tw-ic" href='https://twitter.com/Dpk_9911622150'>
									<i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
								</a>
								<a className="li-ic" href='https://www.linkedin.com/in/deepak-kumar-2a02751a1/'>
									<i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
								</a>
								<a className="li-ic" href='https://github.com/deepak9013216128/covid19'>
									<i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-copyright text-center py-3">Developed By:
					<span> Deepak kumar</span>
				</div>
			</footer>
		</div>
	)
}

export default Footer;
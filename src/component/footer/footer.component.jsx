import React from 'react';

import './footer.styles.css';

const Footer = (props) => {
	
	return (
		<div className='footer'>
			<footer class="page-footer font-small cyan darken-3">
				<div class="container">
					<div class="row">
						<div class="col-md-12 py-5">
							<div class="mb-5 flex-center">
								<a class="fb-ic" href='https://www.facebook.com/profile.php?id=100012390211157'>
									<i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
								</a>
								<a class="tw-ic" href='https://twitter.com/Dpk_9911622150'>
									<i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
								</a>
								<a class="li-ic" href='https://www.linkedin.com/in/deepak-kumar-2a02751a1/'>
									<i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
								</a>
								<a class="li-ic" href='https://github.com/deepak9013216128/covid19'>
									<i class="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="footer-copyright text-center py-3">© 2020 Copyright:
					<a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"> Corona Virus WHO</a>
				</div>
			</footer>
		</div>
	)
}

export default Footer;
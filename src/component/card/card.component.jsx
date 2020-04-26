import React from 'react';

import './card.styles.css';

class Card extends React.Component {
	
	render(){
		const {property,value,color,idx} = this.props;
		// console.log(this.props)
		return (
			<div>
				<div className='card box'>
					<div className="card-body">
						{
							!value && value !== 0 ? (
								<div className={`spinner-border text-${color}`} role="status" />
							):(
								<h2 
									className={`card-text text-${color}`}
								>
									<span>
										{((idx===3||idx===4)&& value !==0 ) && <i className="fas fa-plus" ></i>}	
									</span>
									{value.toLocaleString()}
								</h2>
							)
						}
						<h4 className="card-title display-5">
							{`${property[0].toUpperCase()}${property.slice(1)}`}
						</h4>
						
					</div>
				</div>
			</div>
		)
	}
};

export default Card;
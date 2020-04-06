import React from 'react';

class Card extends React.Component {
	
	render(){
		const {property,value} = this.props;
		// console.log(this.props)
		return (
			<div>
				<div className='card'>
					<div className="card-body">
						<h4 className="card-title display-5">
							{`${property[0].toUpperCase()}${property.slice(1)}`}
						</h4>
						<h5 className="card-text">{value}</h5>
					</div>
				</div>
			</div>
		)
	}
};

export default Card;
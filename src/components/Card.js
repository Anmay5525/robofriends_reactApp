import React from 'react';
import './Card.css';

const Card = (props) => {
		return(
			<div className = "dib xyp9x grow br3 pa3 ma2 bw2 shadow-5 trans">
				<img alt ="robo " src = {`https://robohash.org/${props.id}?100x100`}/>
				<div>
					<h3>{props.name}</h3>
					<p>{props.email}</p>
				</div>
			</div>
			);
}

export default Card;
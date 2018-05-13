import React from 'react';

const Searchbox = ({searchchange}) => {
	return(
			<div className = "pa3">
				<input 
				className="pa2 ba b--green bg-lightest-blue" 
				type = "search" 
				placeholder = "Search robots"
				onChange = {searchchange}	
				/>
			</div>
		);
}

export default Searchbox;
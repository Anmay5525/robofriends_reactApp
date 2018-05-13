import React, {Component} from 'react';
import Searchbox from '../components/Searchbox';
import Cardlist from '../components/Cardlist';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {

	constructor(){
		super();
		this.state = {
			robot : [],
			searchfield : ""
		};
	}

	componentDidMount()
	{
		fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
		.then(users => {this.setState({robot : users})})
	}

	onSearchChange = (event) => {
		this.setState({searchfield : event.target.value })
		
		
	}

	render(){
		const filteredRobots = this.state.robot.filter(robot => {
		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		});
	if(this.state.robot.length === 0)
	{
		return <h1>LOADING</h1>
	}
	else{
		return (
		<div className = "tc">
			<h1 className = "f1">ROBOFRIENDS</h1>
			<Searchbox searchchange = {this.onSearchChange} />
			<Scroll>
				<Cardlist robots = {filteredRobots}/>
			</Scroll>
		</div>
		);
	}
	}
}

export default App;
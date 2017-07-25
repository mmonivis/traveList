import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WeatherSearchBar from './containers/WeatherSearchBar';
import WeatherDiv from './containers/WeatherDiv';

import Navbar from './containers/Navbar';
import Home from './containers/Home';
import Survey from './containers/Survey';
import Login from './containers/Login';
import Register from './containers/Register';
import ListView from './containers/ListView';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					{ /* HEAD
					<WeatherSearchBar />
					<WeatherDiv /> */ }
					<Navbar />
					<div className="container">
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/survey" component={Survey} />
						<Route exact path="/listview" component={ListView} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;

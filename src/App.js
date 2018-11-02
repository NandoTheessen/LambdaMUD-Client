import React, { Component } from 'react';
import { Router } from '@reach/router';
import Home from './Components/index';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Home path="/" />
					<Login path="/login" />
					<Register path="/register" />
				</Router>
			</div>
		);
	}
}

export default App;

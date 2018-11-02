import React from 'react';
import Button from './Button/index';
import { Link } from '@reach/router';

const Home = props => {
	console.log(props.location);
	return (
		<div>
			<h1>Welcome to the Muddiest of them All!</h1>
			<Link to="/login">
				<Button text="Sign in!" />
			</Link>
			<Link to="/register">
				<Button text="Sign up!" />
			</Link>
		</div>
	);
};

export default Home;

import React, { useState } from 'react';

const Register = ({ register }) => {
	let [username, setUsername] = useState('');
	let [password1, setPassword1] = useState('');
	let [password2, setPassword2] = useState('');

	return (
		<>
			<form>
				<label forhtml="Username">Username</label>
				<input
					placeholder="Chose a Username"
					name="username"
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>
				<label forhtml="Password1">Password1</label>
				<input
					placeholder="Password"
					name="password1"
					value={password1}
					onChange={e => setPassword1(e.target.value)}
					type="password"
				/>
				<label forhtml="Password2">Confirm Password</label>
				<input
					placeholder="Password"
					name="Password2"
					value={password2}
					onChange={e => setPassword2(e.target.value)}
					type="password"
				/>
			</form>
		</>
	);
};

export default Register;

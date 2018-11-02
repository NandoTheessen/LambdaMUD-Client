import React, {useState} from 'react';

const Login = ({submitLogin}) => {
    let [username, setUsername ] = useState('');
    let [password, setPassword ] = useState('');

    return (
        <>
        <form onSubmit={(e) => submitLogin(e, username, password)}>
            <label forhtml='Username'>Username</label>
            <input 
            placeholder='Username'
            name='username'
            value={username}
            onChange={e => setUsername(e.target.value)}
            />
            <label forhtml='password'>Password</label>
            <input 
            placeholder='Passwprd'
            name='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            />
        </form>
        </>
    );
};


export default Login
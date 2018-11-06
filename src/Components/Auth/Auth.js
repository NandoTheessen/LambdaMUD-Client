import React, { useState } from "react";

const Auth = ({ submitLogin, keyword }) => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [passwordValidation, setPasswordValidation] = useState("");

  return (
    <form>
      <label forhtml="Username">Username</label>
      <input
        placeholder="Chose a Username"
        name="username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <label forhtml="Password">Password</label>
      <input
        placeholder="Password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        type="password"
      />
      {keyword === "login" ? null : (
        <>
          <label forhtml="PasswordValidation">Confirm Password</label>
          <input
            placeholder="Password"
            name="PasswordValidation"
            value={passwordValidation}
            onChange={e => setPasswordValidation(e.target.value)}
            type="password"
          />
        </>
      )}
    </form>
  );
};

export default Auth;

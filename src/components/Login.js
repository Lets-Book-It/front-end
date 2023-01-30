import React, { useState } from 'react';
import jwt from 'jsonwebtoken';
import axios from 'axios';

const LoginPage = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('/api/auth/login', { email, password })
      .then(response => {
        if (response.data.token) {
          const token = jwt.sign(response.data.token, process.env.REACT_APP_SECRET_OR_KEY);
          localStorage.setItem('jwtToken', token);
        }
        // Check to see if this is a new user
        if (response.data.isNewUser) {
          props.history.push('/profile-form');
        } else {
          props.history.push('/book-reviews');
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </>
  );
};

export default LoginPage;
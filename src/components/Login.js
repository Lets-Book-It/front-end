import React, { Component } from 'react';
import {
  Link,
  withRouter
} from 'react-router-dom';
import { auth } from '../auth';
import * as routes from '../routes';
import jwt from 'jsonwebtoken';

const LoginForm = (props) =>
  <div>
    <h1>Login</h1>
    <LoginFormBase {...props} />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class LoginFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;
    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });
    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;
    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>
        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const authCondition = (authUser) => {
  const token = jwt.decode(authUser.token);
  if (token.profile) {
    return true;
  } else {
    return false;
  }
};

const Login = withRouter(LoginForm);

export default Login;
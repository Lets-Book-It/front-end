import React from 'react';
import Home from './components/Home';
import ProfileForm from './components/ProfileForm';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile-form" component={ProfileForm} />      </Switch>
    </Router>
  );
};

export default App;
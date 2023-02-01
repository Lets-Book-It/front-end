import React from 'react';
import Home from './components/Home';
import ProfileForm from './components/ProfileForm';
import  { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';

const App = () => {
  return (
    <Router>
    <strictMode>
      <Routes>
        <Route exact path="/" element={LoginPage} />
        <Route exact path="/home" element={Home} />
        <Route exact path="/profile-form" element={ProfileForm} />     
      </Routes>
     </strictMode>
   </Router>
  );
};

export default App;
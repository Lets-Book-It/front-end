
const express = require('express');
const router = express.Router();
const auth = require('./auth'); // Import the authentication methods
const profileForm = require('./components/ProfileForm'); // Import the profile form 

// Home route
router.get('/', (req, res) => {
  res.render('index');
});

// Profile route
router.get('/profile', auth.doSignInWithEmailAndPassword, profileForm.renderForm, (req, res) => {
  res.render('profile');
});

module.exports = router;
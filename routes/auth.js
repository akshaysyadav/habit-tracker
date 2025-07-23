const express = require('express');
const passport = require('passport');
const User = require('../models/User');
const router = express.Router();

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const user = new User({ username, email });
    const newUser = await User.register(user, password);
    res.redirect('/login');
  } catch (e) {
    res.send(e.message);
  }
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', passport.authenticate('local', {
  failureRedirect: '/login',
  successRedirect: '/'
}));

router.get('/logout', (req, res) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect('/');
  });
});

module.exports = router;

const Habit = require('../models/Habit'); // <-- Add this at the top, after the User import

// Add this at the bottom of the file, before `module.exports = router;`
router.get('/dashboard', async (req, res) => {
  if (!req.isAuthenticated()) return res.redirect('/login');

  try {
    const habits = await Habit.find({ owner: req.user._id });
    res.render('dashboard', { user: req.user, habits });
  } catch (err) {
    res.status(500).send("Error loading dashboard");
  }
});

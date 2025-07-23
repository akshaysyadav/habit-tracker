const express = require('express');
const router = express.Router();
const Habit = require('../models/Habit');

// Redirect root to dashboard if logged in, else to login
router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect('/dashboard');
  }
  res.redirect('/login');
});

// Dashboard Route
router.get('/dashboard', async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/login');
  }

  try {
    const habits = await Habit.find({ owner: req.user._id });
    res.render('dashboard', { user: req.user, habits });
  } catch (err) {
    console.error('Error fetching habits:', err);
    res.redirect('/');
  }
});

module.exports = router;

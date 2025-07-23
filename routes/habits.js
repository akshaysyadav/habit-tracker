const express = require('express');
const router = express.Router();
const Habit = require('../models/Habit');
const { isLoggedIn } = require('./middleware'); // Make sure this exists
const methodOverride = require('method-override');

router.use(methodOverride('_method'));

// Show form to add new habit
router.get('/new', isLoggedIn, (req, res) => {
  res.render('habits/new');
});

// Create a new habit
router.post('/', isLoggedIn, async (req, res) => {
  const { title, description } = req.body;
  const newHabit = new Habit({
    title,
    description,
    owner: req.user._id
  });

  await newHabit.save();
  res.redirect('/dashboard');
});

// Delete a habit
router.delete('/:id', isLoggedIn, async (req, res) => {
  const { id } = req.params;
  await Habit.findByIdAndDelete(id);
  res.redirect('/dashboard');
});

// Update status for a habit (mark as done, missed, or none)
router.post('/:id/status', isLoggedIn, async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const habit = await Habit.findById(id);

  if (!habit) {
    return res.status(404).send('Habit not found');
  }

  const today = new Date();
  const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const existingLog = habit.logs.find(log =>
    new Date(log.date).getTime() === todayDate.getTime()
  );

  if (existingLog) {
    existingLog.status = status;
  } else {
    habit.logs.push({ date: todayDate, status });
  }

  await habit.save();
  res.redirect('/dashboard');
});

module.exports = router;

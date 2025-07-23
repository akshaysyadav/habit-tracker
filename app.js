const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const methodOverride = require('method-override'); 
const User = require('./models/User');
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');
const habitRoutes = require('./routes/habits');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/habit-tracker')
  .then(() => console.log(" MongoDB connected"))
  .catch(err => console.log("❌ MongoDB error:", err));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse form data and serve static files
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Use method-override for PUT & DELETE methods
app.use(methodOverride('_method'));

// Session configuration
app.use(session({
  secret: 'secretcode',
  resave: false,
  saveUninitialized: false
}));

// Passport configuration
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ✅ Pass user info to all templates
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

// ✅ Routes
app.use('/', indexRoutes);        // Homepage and dashboard
app.use('/', authRoutes);         // Login, register, logout
app.use('/habits', habitRoutes);  // Habit CRUD



// ✅ Start server
app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});


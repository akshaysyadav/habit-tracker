# Habit Tracker

A full-stack web application that helps you build better habits by tracking your daily progress. Mark habits as Done, Missed, or  None and stay consistent with a clean and intuitive dashboard.

---

##  Features

-  Add new daily habits
-  Track each habit's status as Done / Missed / None
-  Delete habits
-  View all habits on a simple dashboard
-  Clean and responsive UI using Bootstrap

---

## Tech Stack

- **Frontend:** HTML, CSS, Bootstrap, EJS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Templating Engine:** EJS
- **Environment Management:** dotenv

---

## Installation & Setup

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/akshaysyadav/habit-tracker.git
cd habit-tracker
2. Install Dependencies
Install all required packages:

bash
npm install express mongoose ejs dotenv method-override
Or use the shortcut:

bash
npm install

3. Start MongoDB
Make sure MongoDB is installed and running on your system.

bash
mongod
 You can also use MongoDB Atlas and replace the DB URL in the .env file.

4. Create .env File
Create a .env file in the root folder and add:

ini
PORT=3000
DB_URL=mongodb://127.0.0.1:27017/habit-tracker
Replace the DB URL with your MongoDB Atlas connection string if you're not using local MongoDB.

5. Start the Server
bash
npm start
Visit the app at:

arduino
Copy
Edit
http://localhost:3000

📁 Folder Structure
bash
Copy
Edit
habit-tracker/
│
├── models/             # Mongoose models (e.g., Habit schema)
│   └── habit.js
│
├── routes/             # Express route handlers
│   └── index.js
│
├── views/              # EJS templates
│   ├── partials/       # Header, footer, etc.
│   └── home.ejs
│
├── public/             # Static files
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── scripts.js
│
├── .env                # Environment variables (not committed)
├── app.js              # Main Express server file
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation


📦 npm Packages Used
Package	          Purpose
express	      Backend server framework
mongoose	  MongoDB object modeling
ejs	          Template engine for rendering views
dotenv	      Load environment variables from .env file
method-override	Allow PUT/DELETE in HTML forms

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.
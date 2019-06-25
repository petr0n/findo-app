const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const session = require('express-session')
const passport = require("passport");
const gAuth = require('./auth/google-auth');
const fAuth = require('./auth/facebook-auth');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo')(session);

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  require('dotenv'); 
}

// Define API routes here
app.use(routes);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/findoDb");

mongoose.Promise = global.Promise;
const db = mongoose.connection

gAuth(passport);
fAuth(passport);
app.use(cookieParser());
app.use(session({
    secret: 'findo-xx-rr-12e',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: db })
}));

app.use(passport.initialize());
app.use(passport.session());

let authRoutes = require('./controllers/authController.js');
app.use(authRoutes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on http://localhost:${PORT}!`);
});

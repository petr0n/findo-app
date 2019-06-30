const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const session = require('express-session')
const passport = require("./auth");
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


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/findoDb",{ useNewUrlParser: true });
const db = mongoose.connection

app.use(cookieParser()); 
app.use(session({
  secret: 'findo-xx-rr-12e',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: db })
}));


app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
  "origin": 'http://localhost:3000',
  "credentials": true
}));

app.use(routes);


// If no API routes are hit, send the React app
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on http://localhost:${PORT}!`);
});

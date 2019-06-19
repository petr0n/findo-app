const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/findoDb"
);

const userSeed = [
  {
    googleId: "xxx",
    Email: "petron@gmail.com",
    Name: "Peter Abeln",
    Role: "admin"
  },
  {
    googleId: "xxx",
    Email: "juliafercello@gmail.com",
    Name: "Julia Fercello",
    Role: "admin"
  },
  {
    googleId: "xxx",
    Email: "raper003@umn.edu",
    Name: "Emily Raper",
    Role: "admin"
  },
  {
    googleId: "xxx",
    Email: "jason.fleming@comcast.net",
    Name: "Jason Fleming",
    Role: "admin"
  },
  {
    googleId: "xxx",
    Email: "onahbosen@gmail.com",
    Name: "Onah Bosen",
    Role: "admin"
  },
  {
    googleId: "xxx",
    Email: "samjones@gmail.com",
    Name: "Sam Jones",
    Role: "user"
  },
  {
    googleId: "xxx",
    Email: "janemoneypenny@gmail.com",
    Name: "Jane Moneypenny",
    Role: "user"
  }
];

db.User
  .remove({})
  .then(() => db.Book.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

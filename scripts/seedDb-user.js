const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/findoDb",
  { useCreateIndex: true, useNewUrlParser: true }
);

const userSeed = [
  {
    email: "petron@gmail.com",
    name: "Peter Abeln",
    role: "admin", 
    socialId: "12345a",
    socialType: "FB",
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    email: "juliafercello@gmail.com",
    name: "Julia Fercello",
    role: "admin", 
    socialId: "12345b",
    socialType: "FB",
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    email: "raper003@umn.edu",
    name: "Emily Raper",
    role: "admin", 
    socialId: "12345c",
    socialType: "FB",
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    email: "jason.fleming@comcast.net",
    name: "Jason Fleming",
    role: "admin", 
    socialId: "12345d",
    socialType: "FB",
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    email: "onahbosen@gmail.com",
    name: "Onah Bosen",
    role: "admin", 
    socialId: "12345e",
    socialType: "FB",
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    email: "samjones@gmail.com",
    name: "Sam Jones",
    role: "user", 
    socialId: "12345f",
    socialType: "FB",
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    email: "janemoneypenny@gmail.com",
    name: "Jane Moneypenny",
    role: "user", 
    socialId: "12345g",
    socialType: "FB",
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    email: "guest@gmail.com",
    name: "guest",
    role: "guest", 
    socialId: "imaguest1234",
    socialType: "none",
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

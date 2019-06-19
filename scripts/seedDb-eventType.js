const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/findoDb"
);

const eventTypeSeed = [
  {
    EventName: "MN State Fair"
  },
  {
    EventName: "SoundSet"    
  }
];

db.EventType
  .remove({})
  .then(() => db.Book.collection.insertMany(eventTypeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

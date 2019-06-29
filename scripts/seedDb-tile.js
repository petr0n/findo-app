const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/findoDb",
  { useCreateIndex: true, useNewUrlParser: true }
);

const tileSeed = [
  {
    tileText: "Moterized scooter pulling something",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Giant pumpkin",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Butter Sculpture",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
     approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Selfie Stick",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
     approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Face tattoo",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Triple scroller",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Shirtless guy",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Lady in bikini top",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Lady in full bikini",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Shirt with swearword",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Horse poop",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Cow pie",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Emu",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Footlong hotdog",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Mohawk hairdo",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Pregnant woman smoking",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Someone walking barefoot",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Small person holding a huge stuffed animal",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Political Seed Art",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Mullet",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Face tattoo",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Twins",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Baby in diaper only",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Family in matching shirts",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Farm kid sleeping on farm animal",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Big Pig Balls",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Baby pig",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Baby ducks",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Person wearing a fanny pack",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Non food item on a stick",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Giant parade cow",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Puddle of puke",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "A handshaking politican",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Triple scroller",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Live news show",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Visable thong",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Person taking photos with an iPad",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Person wearing blaze orange",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Man wearing a kilt",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Child on a leash",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Carny missing some teeth",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Someone with an eye patch",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Someone with unbearable body odor",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Someone wearing overalls with no shirt",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Selfie stick",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Double fisting corndogs",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Someone with a yard stick",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Camel toe",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Moose knuckle",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Something real dumb",
    isPG: true,
    isR: false, 
    status: "inactive",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Airbrushed wolf t-shirt",
    isPG: true,
    isR: false, 
    status: "pending",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Giant bunny",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Mustard stained shirt",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Person with painted face",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Mesh shirt",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Man with food in beard",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Person sleeping",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "MN State Fair mascot",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Escaped farm animal",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Clydedales (or draughthorse) pulling ornate coach",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Blue ribbon winning pies",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Really drunk person",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Screaming kids on the giant slide",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Double fisting roasted corn on the cob",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
  {
    tileText: "Big lake sturgeon",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc"),
    approvedBy: mongoose.Types.ObjectId("5d12db7b7ed4f09a3aa9c9dc")
  },
];

db.Tile
  .remove({})
  .then(() => db.Tile.collection.insertMany(tileSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
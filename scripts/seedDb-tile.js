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
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Giant pumpkin",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Butter Sculpture",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
     approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Selfie Stick",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
     approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Face tattoo",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Triple scroller",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Shirtless guy",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Lady in bikini top",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Lady in full bikini",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Shirt with swearword",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Horse poop",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Cow pie",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Emu",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Footlong hotdog",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Mohawk hairdo",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Pregnant woman smoking",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Someone walking barefoot",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Small person holding a huge stuffed animal",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Political Seed Art",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Mullet",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Face tattoo",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Twins",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Baby in diaper only",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Family in matching shirts",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Farm kid sleeping on farm animal",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Big Pig Balls",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Baby pig",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Baby ducks",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Person wearing a fanny pack",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Non food item on a stick",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Giant parade cow",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Puddle of puke",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "A handshaking politican",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Triple scroller",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Live news show",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Visable thong",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Person taking photos with an iPad",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Person wearing blaze orange",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Man wearing a kilt",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Child on a leash",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Carny missing some teeth",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Someone with an eye patch",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Someone with unbearable body odor",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Someone wearing overalls with no shirt",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Selfie stick",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Double fisting corndogs",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Someone with a yard stick",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Camel toe",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Moose knuckle",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Something real dumb",
    isPG: true,
    isR: false, 
    status: "inactive",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Airbrushed wolf t-shirt",
    isPG: true,
    isR: false, 
    status: "pending",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Giant bunny",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Mustard stained shirt",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Person with painted face",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Mesh shirt",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Man with food in beard",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Person sleeping",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "MN State Fair mascot",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Escaped farm animal",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Clydedales (or draughthorse) pulling ornate coach",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Blue ribbon winning pies",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Really drunk person",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Screaming kids on the giant slide",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Double fisting roasted corn on the cob",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
  },
  {
    tileText: "Big lake sturgeon",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30"),
    approvedBy: mongoose.Types.ObjectId("5d163b4354cce1835770fc30")
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

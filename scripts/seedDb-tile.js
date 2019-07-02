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
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Giant pumpkin",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Butter Sculpture",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
     approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Selfie Stick",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
     approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Face tattoo",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Triple scroller",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Shirtless guy",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Lady in bikini top",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Lady in full bikini",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Shirt with swearword",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Horse poop",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Cow pie",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Emu",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Footlong hotdog",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Mohawk hairdo",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Pregnant woman smoking",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Someone walking barefoot",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Small person holding a huge stuffed animal",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Political Seed Art",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Mullet",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Face tattoo",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Twins",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Baby in diaper only",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Family in matching shirts",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Farm kid sleeping on farm animal",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Big Pig Balls",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Baby pig",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Baby ducks",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Person wearing a fanny pack",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Non food item on a stick",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Giant parade cow",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Puddle of puke",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "A handshaking politican",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Triple scroller",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Live news show",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Visable thong",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Person taking photos with an iPad",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Person wearing blaze orange",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Man wearing a kilt",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Child on a leash",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Carny missing some teeth",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Someone with an eye patch",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Someone with unbearable body odor",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Someone wearing overalls with no shirt",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Selfie stick",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Double fisting corndogs",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Someone with a yard stick",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Camel toe",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Moose knuckle",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Something real dumb",
    isPG: true,
    isR: false, 
    status: "inactive",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Airbrushed wolf t-shirt",
    isPG: true,
    isR: false, 
    status: "pending",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Giant bunny",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Mustard stained shirt",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Person with painted face",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Mesh shirt",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Man with food in beard",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Person sleeping",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "MN State Fair mascot",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Escaped farm animal",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Clydedales (or draughthorse) pulling ornate coach",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Blue ribbon winning pies",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Really drunk person",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Screaming kids on the giant slide",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Double fisting roasted corn on the cob",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
  },
  {
    tileText: "Big lake sturgeon",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f")
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
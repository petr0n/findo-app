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
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Giant pumpkin",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Butter Sculpture",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
     approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Selfie Stick",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
     approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Face tattoo",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Triple scroller",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Shirtless guy",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Lady in bikini top",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Lady in full bikini",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Shirt with swearword",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Horse poop",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Cow pie",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Emu",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Footlong hotdog",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Mohawk hairdo",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Pregnant woman smoking",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Someone walking barefoot",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Small person holding a huge stuffed animal",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Political Seed Art",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Mullet",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Face tattoo",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Twins",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Baby in diaper only",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Family in matching shirts",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Farm kid sleeping on farm animal",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Big Pig Balls",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Baby pig",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Baby ducks",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Person wearing a fanny pack",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Non food item on a stick",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Giant parade cow",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Puddle of puke",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "A handshaking politican",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Triple scroller",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Live news show",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Visable thong",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Person taking photos with an iPad",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Person wearing blaze orange",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Man wearing a kilt",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Child on a leash",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Carny missing some teeth",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Someone with an eye patch",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Someone with unbearable body odor",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Someone wearing overalls with no shirt",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Selfie stick",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Double fisting corndogs",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Someone with a yard stick",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Camel toe",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Moose knuckle",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Something real dumb",
    isPG: true,
    isR: false, 
    status: "inactive",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Airbrushed wolf t-shirt",
    isPG: true,
    isR: false, 
    status: "pending",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Giant bunny",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Mustard stained shirt",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Person with painted face",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Mesh shirt",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Man with food in beard",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Person sleeping",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "MN State Fair mascot",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Escaped farm animal",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Clydedales (or draughthorse) pulling ornate coach",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Blue ribbon winning pies",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Really drunk person",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Screaming kids on the giant slide",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Double fisting roasted corn on the cob",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
  },
  {
    tileText: "Big lake sturgeon",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a"),
    approvedBy: mongoose.Types.ObjectId("5d16c2a8aa327c8da02bb17a")
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

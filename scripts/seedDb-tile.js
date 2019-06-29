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
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Giant pumpkin",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Butter Sculpture",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
     approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Selfie Stick",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
     approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Face tattoo",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Triple scroller",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Shirtless guy",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Lady in bikini top",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Lady in full bikini",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Shirt with swearword",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Horse poop",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Cow pie",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Emu",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Footlong hotdog",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Mohawk hairdo",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Pregnant woman smoking",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Someone walking barefoot",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Small person holding a huge stuffed animal",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Political Seed Art",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Mullet",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Face tattoo",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Twins",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Baby in diaper only",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Family in matching shirts",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Farm kid sleeping on farm animal",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Big Pig Balls",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Baby pig",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Baby ducks",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Person wearing a fanny pack",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Non food item on a stick",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Giant parade cow",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Puddle of puke",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "A handshaking politican",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Triple scroller",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Live news show",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Visable thong",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Person taking photos with an iPad",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Person wearing blaze orange",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Man wearing a kilt",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Child on a leash",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Carny missing some teeth",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Someone with an eye patch",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Someone with unbearable body odor",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Someone wearing overalls with no shirt",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Selfie stick",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Double fisting corndogs",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Someone with a yard stick",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Camel toe",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Moose knuckle",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Something real dumb",
    isPG: true,
    isR: false, 
    status: "inactive",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Airbrushed wolf t-shirt",
    isPG: true,
    isR: false, 
    status: "pending",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Giant bunny",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Mustard stained shirt",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Person with painted face",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Mesh shirt",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Man with food in beard",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Person sleeping",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "MN State Fair mascot",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Escaped farm animal",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Clydedales (or draughthorse) pulling ornate coach",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Blue ribbon winning pies",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Really drunk person",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Screaming kids on the giant slide",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Double fisting roasted corn on the cob",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
  },
  {
    tileText: "Big lake sturgeon",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b"),
    approvedBy: mongoose.Types.ObjectId("5d178f7161ffbf2ff410ca4b")
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

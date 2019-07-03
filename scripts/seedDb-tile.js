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
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now(),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Giant pumpkin",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Butter Sculpture",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
     approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Selfie Stick",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Face tattoo",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Triple scroller",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Shirtless guy",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Lady in bikini top",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Lady in full bikini",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Shirt with swearword",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Horse poop",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Cow pie",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Emu",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Footlong hotdog",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Mohawk hairdo",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Pregnant woman smoking",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Someone walking barefoot",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Small person holding a huge stuffed animal",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Political Seed Art",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Mullet",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Face tattoo",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Twins",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Baby in diaper only",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Family in matching shirts",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Farm kid sleeping on farm animal",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Big Pig Balls",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Baby pig",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Baby ducks",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Person wearing a fanny pack",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Non food item on a stick",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Giant parade cow",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Puddle of puke",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "A handshaking politican",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Triple scroller",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Live news show",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Visable thong",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Person taking photos with an iPad",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Person wearing blaze orange",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Man wearing a kilt",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Child on a leash",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Carny missing some teeth",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Someone with an eye patch",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Someone with unbearable body odor",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Someone wearing overalls with no shirt",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Selfie stick",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Double fisting corndogs",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Someone with a yard stick",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Camel toe",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Moose knuckle",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Something real dumb",
    isPG: true,
    isR: false, 
    status: "inactive",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Airbrushed wolf t-shirt",
    isPG: true,
    isR: false, 
    status: "pending",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Giant bunny",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Mustard stained shirt",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Person with painted face",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Mesh shirt",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Man with food in beard",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Person sleeping",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "MN State Fair mascot",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Escaped farm animal",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Clydedales (or draughthorse) pulling ornate coach",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Blue ribbon winning pies",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Really drunk person",
    isPG: false,
    isR: true, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Screaming kids on the giant slide",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Double fisting roasted corn on the cob",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
  },
  {
    tileText: "Big lake sturgeon",
    isPG: true,
    isR: false, 
    status: "active",
    eventType: "MNStateFair",
    createdBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    approvedBy: mongoose.Types.ObjectId("5d1a9e0ee74e8974886b698f"),
    dateCreated: Date.now(),
    dateUpdated: Date.now()
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
const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/farmfresh",
  {
  }
);

const thumbnailSeed = [
  {
    photo: "https://cdn1.medicalnewstoday.com/content/images/articles/270/270191/carrots-contain-vitamin-a.jpg",
    title: "Organic Carrots",
    description:
      "Yummy Fresh Carrots",
    date: new Date(Date.now())
  }
];

db.Thumbnail
  .remove({})
  .then(() => db.Thumbnail.collection.insertMany(thumbnailSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

"use strict";

// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = require("mongodb").MongoClient; //requiring database with URI
const MongoURI = "mongodb://localhost:27017/tweeter";

db.connect(MongoURI, (err, db) => {
  if(err) {
    console.log("Error: ", err);
    throw err;
  }
  console.log("Connected to ---- MongoDB : ", MongoURI);

  //passing to data helpers
  const DataHelpers = require("./lib/data-helpers.js")(db);
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);

  // Mount the tweets routes at the "/tweets" path prefix:
  app.use("/tweets", tweetsRoutes);

  app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
  });
  
});







"use strict";


const mongoURI = "mongodb://localhost:27017/tweeter";
// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
        db.collection("tweets").insertOne(newTweet, (err, tweet) => {
          if(err) throw err;

          console.log("Tweet inserted : ", newTweet);
          callback(null, tweet);
        }) 
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
        console.log("Iterating on MongoDB : ", mongoURI);
        
        //find tweets in mongoDB
        db.collection("tweets").find().toArray((err, tweet) => {
          if(err) callback(err);
          
          callback(null, tweet);
        });
      
    }
  };
}

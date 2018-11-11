"use strict";
//| ======= Tools needed ======= |
const mongoClient = require('mongodb').MongoClient;
const mongoURI = "mongodb://localhost:27017/tweeter";

mongoClient.connect(mongoURI, (err, db) => {
    console.log(`|======== Connecting to MongoDB...(${mongoURI}) ========|`);
    if(err){
        console.log(`Failed to connect ${mongoURI}`);
        throw err;
    } 
    //| ======= Connection starts here ======= |

    console.log(`|======== Connected to MongoDB: ${mongoURI} ========|`);

    function getTweets(cb) {
        db.collection("tweets").find().toArray(cb);
    }

    getTweets((err, tweets) => {
        if(err) throw err;

        console.log("|======== Logging each tweet... : ========|");

        for (let tweet of tweets){
            console.log(tweet);
        }
        console.log("|======== Closing connection... ========|")
        db.close();
    })


})
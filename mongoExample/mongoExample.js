"use strict";
//| ======= Tools needed ======= |
const mongoClient = require('mongodb').MongoClient;
const mongoURI = "mongodb://localhost:27017/tweeter";

mongoClient.connect(mongoURI, (err, db) => {
    console.log(`Connecting to MongoDB...(${mongoURI})`);
    console.log("|=============================|");
    if(err){
        console.log(`Failed to connect ${mongoURI}`);
        throw err;
    } 
    //| ======= Connection starts here ======= |

    console.log(`Connected to MongoDB: ${mongoURI}`);
    console.log("|=============================|");

    //| ======= Connection ends here ======= |
    db.close();
    console.log(`${mongoURI} disconnected`)
    console.log("|=============================|");

})
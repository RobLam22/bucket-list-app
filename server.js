const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("client"))
app.use(express.json())

// // part 4 - importing dotenv, expressSession and connectMongo dependencies
// require("dotenv").config();  
// const expressSession = require("express-session");
// const MongoStore = require("connect-mongo");

// // register session middleware - takes in an object - store is the db and secret is the key
// app.use(
//   expressSession({
//     store: MongoStore.create({ 
//       mongoUrl: "mongodb://127.0.0.1:27017/",
//       dbName: "scavenger-hunt"
//     }),
//     secret: process.env.EXPRESS_SESSION_SECRET_KEY // this variable should be stored in a .env file, e.g. EXPRESS_SESSION_SECRET_KEY="some secret key" (AND NOT COMMITTED TO SOURCE CONTROL!)
//   })
// );

// Starts web server to check to see if it's running
app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });

  //test
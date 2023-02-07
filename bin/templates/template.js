const express = require("express");
const app = express();
const http = require("http");
const morgan = require("morgan");
// const mongoose = require("mongoose");
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

require("dotenv").config();

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.status(200).json({ status: "Everything is fine." }));

/**
 * 👋 Want to use mongodb ? Uncomment below lines

  mongoose.set("strictQuery", true)                                                        
  mongoose.connect(process.env.MONGO_URL, () => console.log("✔ connected to mongo")    

*/

server.listen(PORT, (err) =>
  !err ? console.log(`✔ Node Listening to http://localhost:${PORT}`) : console.log("There was some error ", err.message)
);

/**
 * 📝 Make .env file and copy paste below lines 

 PORT = 3001
 MONGO_URL = "mongodb://127.0.0.1:27017/mydatabase"

*/

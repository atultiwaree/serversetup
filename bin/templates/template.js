const express = require("express");
const app = express();
const http = require("http");
const morgan = require("morgan");
const server = http.createServer(app);
//const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
require("dotenv").config();

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.status(200).json({ status: "Working fine!" }));

/*
When strict option is set to true, Mongoose will ensure that only the fields that are specified in your Schema will be saved in the database, and all other fields will not be saved (if some other fields are sent).
*/

//mongoose.set("strictQuery", true);

//For mongodb link just place mongo url in .env file and uncomment bellow line.

//mongoose.connect(process.env.MONGO_URL, () => console.log(msgConstants.mongoStarted));
server.listen(PORT, (err) =>
  !err ? console.log(`✔ Node Listening to http://localhost:${PORT}`) : console.log("There was some error ", err.message)
);

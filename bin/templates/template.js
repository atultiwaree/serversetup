const express = require("express");
const app = express();
const http = require("http");
const morgan = require("morgan");
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

require("dotenv").config();

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.status(200).json({ status: "Everything is fine." }));

server.listen(PORT, (err) =>
  !err ? console.log(`✔ Node Listening to http://localhost:${PORT}`) : console.log("There was some error ", err.message)
);

/*

👋 If you want to use mongodb export mongoose in your project just copy paste below lines.
  _______________________________________________________________________________

  mongoose.set("strictQuery", true)                                                        
  mongoose.connect(process.env.MONGO_URL, () => console.log("✔ connected to mongo")    

  -------------------------------------------------------------------------------

🤷‍♂️ When strict option is set to true, Mongoose will ensure that 
only the fields that are specified in your Schema will be saved in the 
database, and all other fields will not be saved (if some other fields are sent

*/

/*

👋 Sample .env file constants 
_____________________________________________ 

PORT = 3001
MONGO_URL = "mongodb://127.0.0.1:27017/<your-database-name>"
_____________________________________________

*/

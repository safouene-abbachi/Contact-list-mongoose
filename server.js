const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();

const Contact = require("./routes/contact");

// 4_ body-parser
app.use(express.json());
// 3_ routes
app.use("/api/contacts", Contact);
//2_ connect db
connectDB();

//1 _ run server
const port = process.env.PORT || 5000;
app.listen(port, (err) =>
  err
    ? console.log("cannot connect to server")
    : console.log(`server is running on ${port}`)
);

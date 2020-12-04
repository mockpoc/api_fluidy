const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv/config');
const bodyParser = require("body-parser");
const cors = require('cors')
const verify = require("./verifyToken");
const router = require("express").Router();
//Import routes
const postsRoute = require("./routes/posts");

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("connected to DB !");
})

app.use(bodyParser.json());
app.use(cors());

//route mdw
app.use("/posts", postsRoute);
// app.use("/posts", verify, postsRoute);

router.get("/", (req, res) => {
	res.status(400).send("api mockpoc test event");
});

//ROUTES belt-track
app.listen(process.env.PORT, () => {
    console.log("server up and running on port", process.env.PORT);
});

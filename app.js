require('dotenv').config()
const {urlencoded} = require('express');
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const morgan = require('morgan');
const app = express();
const itemController = require('./controllers/itemController');

// mongUri is our variable that contains our mongodb Atlas password. 
const mongoURI = process.env.MONGO_URI
// Connect to Mongo, this message logs to the console when our db is connected
mongoose.connect(mongoURI, ()=> console.log('mongo connected:', mongoURI));
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is Mongod not running'));
db.on('disconnected', ()=> console.log('mongo disconnected'));
// morgan will tell us our http requests, errors or successes
app.use(morgan('short'))
// cors allows us to make cross origin requests express to react
app.use(cors());

// app.use(express())

app.use(urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
    res.redirect("/items");
  });
app.use('/items', itemController);
const port = process.env.PORT || 4000

app.listen(port, ()=>{
    console.log('app running')
})
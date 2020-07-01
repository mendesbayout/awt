const express = require('express');
const app = express();




/** 1) Install & Set up mongoose */
require('dotenv').config({ path: '.env' });
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {console.log("Connected to Database")})
.catch(err => console.log(err));

var Schema = mongoose.Schema;

var blogSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`server started on port ${PORT}`));

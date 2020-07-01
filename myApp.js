const express = require('express');
const app = express();




/** 1) Install & Set up mongoose */
require('dotenv').config({ path: '.env' });
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {console.log("Connected to Database")})
.catch(err => console.log(err));

const Schema = mongoose.Schema;

const personSchema = new Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: [String]
  });
  
  const Person = mongoose.model("Person", personSchema);

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`server started on port ${PORT}`));

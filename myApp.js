const express = require('express');
const app = express();


/** 1) Install & Set up mongoose */
require('dotenv').config({ path: '.env' });


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<joao>:<1234>@cluster0.dwiyl.mongodb.net/<cluster0>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("Connected to db")
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`server started on port ${PORT}`));



const express = require("express");
const app = express();
const initData = require("./data.js")
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");

main()
.then(() => {
    console.log("connection successfull")
})
.catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
  
}


const initDB = async () => {
      await Listing.deleteMany({});
      initData.data = initData.data.map((obj) => ({
        ...obj ,
        owner: "674f581e9f5f8416e7ed6e6e" 
      }));   
      await Listing.insertMany(initData.data);
      console.log("Data was initialized");
}
initDB();

const { error } = require('console');
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/TechIndia").then(()=>{
    console.log("You are connected to database.");
}).catch((error)=>{
    console.log(error);
})
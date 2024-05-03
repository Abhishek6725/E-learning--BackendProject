const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const bcryptjs = require("bcryptjs");
const express = require('express');


const signupSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String
    },
    password: {
        type: String, Number,
    }
});

signupSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
})



const Signupregister = new mongoose.model("Signupregister", signupSchema);

module.exports = Signupregister;




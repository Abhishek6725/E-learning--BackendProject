const mongoose = require('mongoose');

const JayformSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String
    },
    subject : {
        type : String
        
    },
    text : {
        type : String
    }
});

const Techformregister = new mongoose.model("Techformregister",JayformSchema);

module.exports = Techformregister;
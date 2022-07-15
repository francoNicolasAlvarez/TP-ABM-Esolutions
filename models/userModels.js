const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    userName: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    company:{
        required: true,
        type: mongoose.Schema.objectId,
        ref:"company"
    }
});

 
module.exports = mongoose.model("Data", dataSchema);
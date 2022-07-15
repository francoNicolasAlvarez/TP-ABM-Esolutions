const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    catchPhrase: {
        required: true,
        type: String
    },
    bs: {
        required: true,
        type: String
    }
});


module.exports = mongoose.model("Compania", dataSchema);
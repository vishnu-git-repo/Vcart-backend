const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email : {
        type : String
    },
    password : {
        type : String
    }
})

const USERS = mongoose.model("USERS",userSchema);
module.exports = USERS;
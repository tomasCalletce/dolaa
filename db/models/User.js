require('../main.js')
const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: String,
    email: String,
    title: String,
    discordUsername: {
        type: String,
        require: true,

    },
    discordID: String,
    hash: String,
    salt: String
});

const User = mongoose.models.users || model('users', userSchema);
module.exports = User;

const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    email: String
})

exports.User = new mongoose.model('User', UserSchema)
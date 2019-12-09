const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    phonenumber: Number,
    age: Number
})
const UserTodo = mongoose.model("User",UserSchema)
module.exports = UserTodo
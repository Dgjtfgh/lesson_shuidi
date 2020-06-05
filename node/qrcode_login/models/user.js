const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// jwt
const UserSchema = new Schema({
    username: String,
    password: String,
    avatar: String,
    // token  在 client 端 localStorage.setItem() 存放
    token: String
})

module.exports = mongoose.model('User', UserSchema);
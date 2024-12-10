const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
})

const signupModel = mongoose.model('signup', signupSchema)

const loginSchema = new mongoose.Schema({
    email:String,
    password:String,
})

const loginModel = mongoose.model('login', loginSchema)

module.exports = {signupModel,loginModel};
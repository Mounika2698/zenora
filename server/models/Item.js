const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    userName:String,
    password:String,
    // confirmPassword:String
})

const itemModel = mongoose.model('item', itemSchema)

module.exports = itemModel;
let mongoose = require('mongoose')
let student = new mongoose.Schema({
    email: String,
    name: String,
    birthday: Date
})
module.exports = mongoose.model('Student', student)

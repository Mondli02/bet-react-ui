const mongoose = require('mongoose')
let USerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
}
)

module.exports = mongoose.model('USer', USerSchema)
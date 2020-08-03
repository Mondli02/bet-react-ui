const mongoose = require('mongoose')
let TournamentSchema = new mongoose.Schema({
    name: String
     
}
)

module.exports = mongoose.model('Tournament', TournamentSchema)
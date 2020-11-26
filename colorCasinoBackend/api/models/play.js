'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PlaySchema = Schema({
    user: {type: Schema.ObjectId, ref: 'User'},
    juegos: {type: Schema.ObjectId, ref: 'Juego'}
})

module.exports = mongoose.model('Play', PlaySchema);
'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PostSchema = Schema({
    text: String,
    image: String,
    created_at: String,
    user: {type: Schema.ObjectId, ref: 'User'},
    juegos: {type: Schema.ObjectId, ref: 'Juego'},
    maquina: {type: Schema.ObjectId, ref: 'Maquina'}
})

module.exports = mongoose.model('Post', PostSchema);
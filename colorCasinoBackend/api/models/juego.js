'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let JuegoSchema = Schema({
    Tipo:String,
    Ganancias: BigInt,
    Perdidas: BigInt,
    description:String
})

module.exports = mongoose.model("Juego", JuegoSchema);
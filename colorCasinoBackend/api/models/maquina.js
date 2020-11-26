'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let maquinaSchema = Schema({
    Tipo:juego,
    Token: BigInt,
    categoria: String,
    usos:BigInt
})

module.exports = mongoose.model("Maquina", maquinaSchema);
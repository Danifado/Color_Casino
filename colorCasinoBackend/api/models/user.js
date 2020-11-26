'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = Schema({
    name: String,
    second_name: String,
    email: String,
    username: String,
    password: String,
    Status: String,
    birthday:Date,
    juegoReciente:Juego,
    image: String,
    description: String
})

module.exports = mongoose.model("User", UserSchema);
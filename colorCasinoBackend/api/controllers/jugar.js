'use strict'

let bcrypt = require('bcrypt-node');
const {param} = require('../app');
let Maquina = require('../models/maquina');
let jwt = require('../services/jwt');
let mongoosePaginate = require('mongoose-pagination');

function apostar(req, res){
    res.status(200).send(
    {saludo: "aquí deberiamos verificar la cuenta del usuario"}
)}

function pruebas(req, res){
    res.status(200).send(
        {saludo: "pues si, si funciona"}
    )
}

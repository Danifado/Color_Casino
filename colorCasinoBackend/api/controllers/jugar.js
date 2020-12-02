'use strict'

let bcrypt = require('bcrypt-node');
const {param} = require('../app');
let Maquina = require('../models/maquina');
let User=require('../models/User')
let jwt = require('../services/jwt');
let mongoosePaginate = require('mongoose-pagination');

function apostar(req, res){
    res.status(200).send(
    {saludo: "aquí deberiamos verificar la cuenta del usuario"}
    Maquina.find().paginate(page, docsPerPage, (err, Maquinas, total) => {
        if(err){
            return res.status(500).send({
                message: 'Hubo un error consultando las maquinas'
            })
        }

        if(!Maquinas) return res.status(200).send({
            message: "No hay maquinas"
        })

        return res.status(200).send({
            tipo,
            token,
            usos:usos+1
        })

    })
)}

function prueba(req, res){
    res.status(200).send(
        {saludo: "pues si, si funciona"}
    )
}



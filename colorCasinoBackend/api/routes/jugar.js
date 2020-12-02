'use strict'

let express = require('express');
let UserController = require('../controllers/user');
let JuegoController = require('../controllers/jugar');
const { model } = require('../models/user');
let mid_auth = require('../middlewares/auth');

let api = express.Router() 

api.get('/home', UserController.home);
api.get('/jugar', mid_auth.validateAuth, JuegoController.jugar);
api.post('/register', UserController.saveUser);
api.post('/login', UserController.loginUsers);

api.get('/user/:id', mid_auth.validateAuth, UserController.getUser);
api.get('/users/:page?', mid_auth.validateAuth, UserController.getUsers);
module.exports = api;
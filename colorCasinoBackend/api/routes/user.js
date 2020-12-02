'use strict'

let express = require('express');
let UserController = require('../controllers/user');
const { model } = require('../models/user');
let mid_auth = require('../middlewares/auth');

let api = express.Router() 

api.get('/home', UserController.home);
api.post('/register', UserController.saveUser);
api.post('/login', UserController.loginUsers);
// Traer información de los usuarios
api.get('/user/:id', mid_auth.validateAuth, UserController.getUser);
api.get('/users/:page?', mid_auth.validateAuth, UserController.getUsers);
module.exports = api;
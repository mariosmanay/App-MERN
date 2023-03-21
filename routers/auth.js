const express = require('express')
const authcontroller = require('../controllers/auth')
const api = express.Router()

api.post('/auth/register', authcontroller.register)
api.post('auth/login', authcontroller.login)
api.post('/auth/refresh_access_token', authcontroller.refreshAccessToken)


module.exports = api;
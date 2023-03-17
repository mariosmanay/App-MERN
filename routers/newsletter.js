const express = require('express');
const md_auth = require('../middlewares/authenticated');
const NewsletterController = require('../controllers/newsletter');
const api = express.Router();


api.post('/newsletter', NewsletterController.suscribeEmail)
api.get('/newsletter', [md_auth.asureAuth], NewsletterController.suscribeEmail)
api.delete('/newsletter/:id', [md_auth.asureAuth], NewsletterController.deleteEmail)

module.exports = api;
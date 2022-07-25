'use strict'

const express = require('express');

// creation de l'instance d'application express
const app = express()
const env = require('dotenv').config()
const gettingIndexPage = require('./pages/index-get.js')

// Utilisation des ressources
app.use('/assets', express.static('./assets', { etag: false }))

app.get('/', async(req, res) => {
const indexHtml = await gettingIndexPage()
res.send(indexHtml) 
});

// Lancement du serveur  PORT:3000
app.listen(process.env.PORT);





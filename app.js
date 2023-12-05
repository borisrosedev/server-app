const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const carteRoutes = require('./routes/carte')
const menuRoutes = require('./routes/menu')
const path = require('node:path')

app.set('port', process.env.PORT)
app.use(express.json({ extended: 'true', limit: '10mb'}))
app.use(cors())
app.use(express.urlencoded({ extended: 'true', limit: '10mb'}))
app.use(express.static(path.join(__dirname, 'public/assets/')))
app.use('/api/carte', carteRoutes)
app.use('/api/menu', menuRoutes)


module.exports = app




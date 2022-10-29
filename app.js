const express = require('express')
const app = express()
const products = require('./routes/products')
app.use(express.json())

app.use('/products', products)
    
module.exports = app
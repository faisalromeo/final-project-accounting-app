const express = require('express')
const app = express()
const application = require('./app')
app.use(application)

app.listen(3000, function (){
    console.log('running on port 3000')
})
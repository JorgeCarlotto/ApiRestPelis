const express = require('express');
const bodyParser = require('body-parser');

const apiRoute = require('./routers/api')

const app = express();

require('./db')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api',apiRoute)

app.listen(3000,()=>{
    console.log('Servidor listening on port 3000')
})
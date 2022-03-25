const express = require('express');
const bodyParser = require('body-parser');


const app = express();

require('./db')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.send('Test de servidor')
})

app.listen(3000,()=>{
    console.log('Servidor listening on port 3000')
})
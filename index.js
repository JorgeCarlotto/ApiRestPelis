const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('Test de servidor')
})

app.listen(3000,()=>{
    console.log('Servidor listening on port 3000')
})
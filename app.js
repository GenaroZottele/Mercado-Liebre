const express = require('express');
const res = require('express/lib/response');
const app = express();

const path = require('path');
const publicFolderPath = path.resolve('public');
app.use(express.static(publicFolderPath));

const APP_PORT = 1234;
app.listen(APP_PORT, () => {
    console.log('Servidor funcionando en puerto ' + APP_PORT)
});

app.get('/',(req, res)=>{
    res.sendFile(path.resolve('./views/home.html'))
});

app.get('/register.html',(req, res)=>{
    res.sendFile(path.resolve('./views/register.html'))
})
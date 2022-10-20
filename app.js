const express = require('express');
const res = require('express/lib/response');
const app = express();

const path = require('path');
const publicFolderPath = path.resolve('public');
app.use(express.static(publicFolderPath));

const port = process.env.PORT || 3001;
app.listen(port,()=>console.log('Servidor corriendo en el pruerto ' + port));

app.get('/',(req, res)=>{
    res.sendFile(path.resolve('./views/home.html'))
});

app.get('/register.html',(req, res)=>{
    res.sendFile(path.resolve('./views/register.html'))
})
app.get('/login.html',(req, res)=>{
    res.sendFile(path.resolve('./views/login.html'))
})
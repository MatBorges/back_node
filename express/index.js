const express = require('express')
const app = express()

var port = 8081

app.get('/', function(req, res){
    res.send('Hello World, Welcome to my app!!')
})

app.get('/about', function(req, res){
    res.send('Page About')
})

app.get('/main', function(req, res){
    res.send('Page Main')
})

app.listen(port, function(){
    console.log(`RUN IN http://localhost:${port}`)
}) //Cria o servidor HTTP, DEVE SEMPRE SER A ÚLTIMA FUNÇÃO!!!!

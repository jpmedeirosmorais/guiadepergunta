const express = require('express')
const app =  express()
const bodyParser = require('body-parser')
const connection = require('./database/database')
const perguntaModel = require('./database/Pergunta')

//Database
connection.authenticate().then(() =>{
    console.log("Conexão com o banco de dados realizado com sucesso!")
}).catch((err) =>{
    console.log(err)
})
//essa linha é usada para renderizar o ejs
app.set('view engine', 'ejs')

//declara o uso de arquivos estáticos
app.use(express.static('public'))

//body-parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//rotas
app.get('/', (req, res) => {
    res.render('index')    
})

app.get('/perguntar', (req, res) => {
    res.render('perguntar')
})

app.post('/salvarpergunta', (req, res) => {
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    res.send(titulo)
})

app.listen(8081, ()=>{
    console.log('App rodando em: localhost:8081')
})
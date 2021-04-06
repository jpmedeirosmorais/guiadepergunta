const express = require('express')
const app =  express()
const bodyParser = require('body-parser')
const connection = require('./database/database')//importando configurações do database.js da pasta database
const Pergunta = require('./database/Pergunta')//IMPORTANDO MODEL Pergunta.js da pasta database
const Resposta = require('./database/Resposta')

const Usuario = require('./database/Usuario')

const flash = require('connect-flash')
now = new Date
    //dia = now.getDate()

    //console.log(typeof dia)


    //app.use(flash())
//midlewares
/*app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    next()
    res.locals.error = req.flash('error')
    res.locals.user = req.user || null;
 }) */

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
    Pergunta.findAll({raw: true, order:[
        ['id', 'DESC']
    ]}).then(perguntas =>{
        res.render('index',{
            perguntas: perguntas
        })
    })
})

app.get('/perguntar', (req, res) => {
    res.render('perguntar')
})

app.post('/salvarpergunta', (req, res) => {
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() =>{
    
        res.redirect('/')
        req.flash('success_msg', 'Pergunta criada com sucesso!')
    }).catch(err =>{
        res.redirect('/perguntar')
        req.flash('error_msg', 'Erro interno ao criar pergunta!')
    })
})

app.get('/responder/:id', (req, res) =>{
    var id = req.params.id
    Pergunta.findOne({
        where: {id: id}
    }).then(pergunta =>{
        if(pergunta != undefined){
            Resposta.findAll({
                where: {perguntaId : pergunta.id},
                order:[
                    ['id', 'DESC']
                ]
            }).then(respostas =>{
                res.render('responder',{
                    pergunta: pergunta,
                    respostas :respostas
                })
            })            
        }else{
            res.redirect('/')
        }
    })
})
app.post('/salvarresposta', (req, res) =>{
    var resposta = req.body.resposta
    var perguntaId = req.body.perguntaId
    var dia = now.getDate()
    Resposta.create({
        corpo: resposta,
        perguntaId: perguntaId
    }).then(() =>{
        res.redirect('/responder/'+perguntaId)
        req.flash('success_msg', 'Resposta criada com sucesso!')
    }).catch(err =>{
        res.redirect('/')
        req.flash('error_msg', 'Erro interno ao criar resposta!')
    })
})
app.get('/criarusuario', (req, res) =>{
    res.render('usuario')
})
app.post('/salvarusuario', (req, res) =>{
    var nome = req.body.nome
    var email = req.body.email
    var senha = req.body.senha
    Usuario.create({
        nome: nome,
        email: email,
        senha: senha
    }).then(() =>{
        res.redirect('/')
        req.flash('Usuário criado com sucesso')
    })
})

app.listen(8081, ()=>{
    console.log('App rodando em: localhost:8081')
})
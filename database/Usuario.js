const Sequelize = require('sequelize')
const connection = require('./database')

const Usuario = connection.define('usuario', {
    nome:{
        type: Sequelize.STRING,
        required: true
    },
    email:{
        type: Sequelize.STRING,
        required: true
    },
    senha:{
        type: Sequelize.STRING,
        required: true
    }
})

Usuario.sync({force:false}).then(() =>{
    console.log('Model Usuario criado com sucesso!')
}).catch(err =>{
    console.log('Erro ao criar model Usuário')
})

module.exports = Usuario
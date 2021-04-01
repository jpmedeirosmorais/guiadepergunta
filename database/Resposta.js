const Sequelize = require('sequelize')
const connection = require('./database')

const Resposta = connection.define('resposta', {
    corpo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    perguntaId:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})


Resposta.sync({force:false}).then(() =>{
    console.log('Model Resposta criado com sucesso!')
}).catch(err =>{
    console.log('Erro ao criar model Resposta')
})

module.exports = Resposta
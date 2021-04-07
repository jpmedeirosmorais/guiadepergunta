const Sequelize = require('sequelize')
const connection = require('./database')

const Pergunta = connection.define('pergunta', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    userId:{
        type: Sequelize.INTEGER,
        required: true
    }
})

Pergunta.sync({force:false}).then(() =>{
    console.log('Model Pergunta criado com sucesso!')
}).catch(err =>{
    console.log('Erro ao criar model Pergnta')
})

module.exports = Pergunta

